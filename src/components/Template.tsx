type TemplateProps = {
    item: {
        id: string
        name: string
    }
}

const Template = (props: TemplateProps) => {
    const { item } = props
    return (
        <div className="border border-amber-400 w-full">
            {item.name}
        </div>
    )
}

export default Template;