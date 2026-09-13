import { comparison, comparisonColumns, type Cell } from "@/lib/pricing";

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <>
        <svg
          className="w-5 h-5 text-[#3d4cf5] mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span className="block w-3 h-px bg-[#c9cddd] mx-auto" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-[#171a26] text-sm font-semibold">{value}</span>;
}

/**
 * Full feature matrix across the two Foundations options and the retainer.
 * The table scrolls horizontally inside its own container on narrow screens
 * rather than pushing the page wide.
 *
 * Note: the row-label column is NOT sticky. Scrolled right on a narrow screen
 * the labels go out of view, leaving unlabelled columns of ticks — worth fixing,
 * but it needs a background and z-index on the label cells to avoid the rows
 * showing through, so it isn't a one-liner.
 *
 * `contain-content` (contain: layout paint) on the scroller is load-bearing.
 * Without it Chromium propagates the table's min-content width all the way to
 * documentElement.scrollWidth even though nothing visibly overflows, and
 * mobile Chrome then sizes its layout viewport from that number — the page
 * renders wider than 375px and the header CTA sits off-screen for the whole
 * visit. Measured: overflow-x:clip on the scroller, section, main, body and
 * html all fail; min-width:0, table-layout:fixed and a fixed width all fail;
 * only containment works. Don't remove it without re-measuring
 * html.scrollWidth at 375px.
 */
export default function ComparisonTable() {
  return (
    <div className="contain-content overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[760px] border-collapse">
        <caption className="sr-only">
          Feature comparison across Foundations on your site, Foundations with a new site, and the
          Visibility retainer
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-[37%] text-left align-bottom pb-5 pr-4" />
            {comparisonColumns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`w-[21%] align-bottom pb-5 px-3 text-center ${
                  col.featured ? "bg-[#f6f7fc] rounded-t-xl" : ""
                }`}
              >
                <span className="block text-[#171a26] font-bold text-base">{col.label}</span>
                <span className="block text-[#8a90a0] text-xs font-medium mt-1">{col.price}</span>
              </th>
            ))}
          </tr>
        </thead>

        {comparison.map((group) => (
          <tbody key={group.group}>
            <tr>
              <th
                scope="colgroup"
                colSpan={4}
                className="text-left text-[11px] font-bold tracking-widest uppercase text-[#3d4cf5] pt-8 pb-3"
              >
                {group.group}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-t border-[#e6e8f2]">
                <th
                  scope="row"
                  className="text-left text-sm font-medium text-[#565c6b] py-3.5 pr-4"
                >
                  {row.label}
                </th>
                {comparisonColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`text-center py-3.5 px-3 ${col.featured ? "bg-[#f6f7fc]" : ""}`}
                  >
                    <CellValue value={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
