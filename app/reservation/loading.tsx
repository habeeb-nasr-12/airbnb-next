import SkelotenCard from "@/components/SkelotenCard";

const loading = () => {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <h2 className="text-3xl font-semibold tracking-tighter ">
        Your Reservation
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-8 mt-8">
        {" "}
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
        <SkelotenCard/>
      </div>
    </section>
  );
};

export default loading;
