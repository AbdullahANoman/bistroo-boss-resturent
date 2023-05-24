

const SectionTitle = ({subHeader, header}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center py-8">
            <p className="text-[#D99904] text-2xl mb-2">--- {subHeader} ---</p>
            <h3 className="text-4xl border-y-4 py-4 uppercase">{header}</h3>
        </div>
    );
};

export default SectionTitle;