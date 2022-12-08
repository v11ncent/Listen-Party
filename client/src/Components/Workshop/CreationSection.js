import CreationForm from "./Form/CreationForm";
import SectionName from "./SectionName";
import SectionDescription from "./SectionDescription";

const CreationSection = (props) => {
  return (
    <section className="creation">
      <SectionName name={"Create a lobby"} />
      <SectionDescription
        description={"Create a lobby to listen to music with friends"}
      />
      <CreationForm
        setFormSubmitted={props.setFormSubmitted}
        formSubmitted={props.formSubmitted}
      />
    </section>
  );
};

export default CreationSection;
