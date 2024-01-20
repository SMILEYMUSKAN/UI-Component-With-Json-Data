import { modules } from "../data";

const ModuleCards = () => {
    const { syllabus } = modules;
    return (
      <div className="flex-1 flex items-center mt-2 justify-center flex-col">
        {syllabus?.map((module, idx) => <div key={idx} className="bg-white w-3/4 rounded shadow-2xl h-48 flex mb-2">
            <section className="flex flex-col gap-4 w-80 rounded bg-indigo-950">
            <h1 className="text-2xl text-white font-semibold m-2">Module: {module?.id}</h1>
            <h2 className="fond-medium mt-2 text-center text-white">{module?.name}</h2>
            </section>
            <h1 className="text-gray-700 font-semibold text-2xl m-2">Topics</h1>
      <section className="flex-1 justify-center mt-4 flex flex-col gap-2 p-2">
        {module?.topics?.map((topics, idx) => <p key={idx} className="text-lg text-gray-700 cursor-pointer hover:underline hover:transition">
          {topics}
        </p>)}
      </section>
        </div>)}
      </div>
    );
  };
  
  export default ModuleCards;