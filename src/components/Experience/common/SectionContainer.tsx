interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
}

function SectionContainer({ children, sectionName }: SectionContainerProps) {
  return (
    <div className="border-secondary_lightgray-100 border-2 rounded-2xl p-5 mx-10 font-oriya">
      <h2 className="text-secondary_lightgray text-3xl text-center my-3">
        {sectionName}
      </h2>
      <div className="flex justify-start flex-wrap">{children}</div>
    </div>
  );
}

export default SectionContainer;
