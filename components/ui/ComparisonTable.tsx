import { comparison, type Cell, type ComparisonRow } from "@/lib/pricing";

// `key` is narrowed to the tier fields of ComparisonRow so `row[col.key]`
// type-checks without a cast.
const columns: {
  key: Exclude<keyof ComparisonRow, "label">;
  label: string;
  price: string;
  featured?: boolean;
}[] = [
  { key: "website", label: "The Website", price: "From £500 one-off" },
  { key: "basic", label: "Basic", price: "£200 / mo" },
  { key: "standard", label: "Standard", price: "£400 / mo", featured: true },
  { key: "premium", label: "Premium", price: "£500 / mo" },
];

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
 * Full feature matrix across all four tiers. The table scrolls horizontally
 * inside its own container on narrow screens rather than pushing the page wide;
 * the first column is sticky so row labels stay readable while scrolling.
 */
export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[820px] border-collapse">
        <caption className="sr-only">
          Feature comparison across The Website, Basic, Standard and Premium
        </caption>
        <thead>
          <tr>
            <th scope="col" className="w-[34%] text-left align-bottom pb-5 pr-4" />
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`w-[16.5%] align-bottom pb-5 px-3 text-center ${
                  col.featured ? "bg-[#f6f7fc] rounded-t-xl" : ""
                }`}
              >
                {col.featured && (
                  <span className="block mx-auto mb-2 w-fit bg-gradient-brand-static text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
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
                colSpan={5}
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
                {columns.map((col) => (
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
