const UnderlineTitle = ({ title }: { title: string }) => {
    return (
        <h2 className="underline-section-title text-lg font-semibold text-slate-600 dark:text-gray-200 border-b border-slate-400 dark:border-gray-600  pb-1">
            <span>
                {title}
            </span>
        </h2>
    )
}

export default UnderlineTitle;