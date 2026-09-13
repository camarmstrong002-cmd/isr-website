// The proposition made literal: one registry record, structured the ISR way.
export default function RecordCard() {
  return (
    <div className="record" aria-label="Illustration of an ISR-aligned registry record">
      <div className="record-head">
        <span className="label">Registry record</span>
        <span className="record-status">Comparable</span>
      </div>
      <dl className="record-rows">
        <div className="record-row">
          <dt><span className="record-num">01</span>Minimum data set</dt>
          <dd>Agreed core fields, collected under the same headings in every registry</dd>
        </div>
        <div className="record-row">
          <dt><span className="record-num">02</span>PROMs</dt>
          <dd>Agreed patient-reported outcome measures and timepoints</dd>
        </div>
        <div className="record-row">
          <dt><span className="record-num">03</span>Implant data</dt>
          <dd>Every implant recorded against a shared implant library</dd>
        </div>
      </dl>
      <p className="record-foot">Consistent core, so any two registries can be compared. Anything beyond the core stays each registry’s own.</p>
    </div>
  )
}
