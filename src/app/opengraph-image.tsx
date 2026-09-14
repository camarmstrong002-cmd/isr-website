import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { SITE_NAME } from '@/lib/site'

export const alt = `${SITE_NAME}: one language for the world’s spinal data`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const buf = await readFile(path.join(process.cwd(), 'src', 'assets', 'fonts', `SchibstedGrotesk-${weight}.ttf`))
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const [bold, regular, logo] = await Promise.all([
    loadFont(700),
    loadFont(400),
    readFile(path.join(process.cwd(), 'public', 'isr-logo.png')).then((b) => `data:image/png;base64,${b.toString('base64')}`).catch(() => null),
  ])
  const fonts = [
    ...(bold ? [{ name: 'Schibsted', data: bold, weight: 700 as const, style: 'normal' as const }] : []),
    ...(regular ? [{ name: 'Schibsted', data: regular, weight: 400 as const, style: 'normal' as const }] : []),
  ]
  const family = fonts.length ? 'Schibsted' : 'sans-serif'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          background: '#212f4a', color: '#f3f5f9', padding: '64px 80px', fontFamily: family,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} width={56} height={54} alt="" style={{ borderRadius: 28, background: '#f3f5f9' }} />
          ) : (
            <div style={{ width: 56, height: 56, borderRadius: 28, background: '#f3f5f9', display: 'flex' }} />
          )}
          {SITE_NAME}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.0, letterSpacing: -3.5, maxWidth: 1000 }}>
            One language for the world’s spinal data.
          </div>
          <div style={{ marginTop: 32, fontSize: 30, fontWeight: 400, color: '#b3bfd2', lineHeight: 1.3, maxWidth: 960 }}>
            A shared minimum data set, common PROMs and a unified implant library across the world’s spine registries.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, fontWeight: 400, color: '#b3bfd2' }}>
          <span>spineregistries.com</span>
          <span>Conceived by ODEP</span>
        </div>
      </div>
    ),
    fonts.length ? { ...size, fonts } : { ...size }
  )
}
