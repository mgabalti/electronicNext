import { SpecGroup } from "@/core/types/Product-detail.types";


const Specification = ({data}: {data: SpecGroup[]}) => {
    return (
        <>
            <div className="overflow-x-auto">
                {data.map(group => (
                    <table key={group.id} className="w-full text-sm mb-6 border-collapse">
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-left px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-xs uppercase tracking-wide">
                                    {group.groupName}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {group.items.map((item, ii) => (
                                <tr key={item.id} className={ii % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50 dark:bg-gray-900"}>
                                    <th scope="row" className="text-left px-3 py-2 text-gray-500 dark:text-gray-400 font-medium w-48 align-top whitespace-nowrap">
                                        {item.key}
                                    </th>
                                    <td className="px-3 py-2 text-gray-700 dark:text-gray-200 whitespace-pre-line">
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            </div>
        </>
    );
}


export default Specification;