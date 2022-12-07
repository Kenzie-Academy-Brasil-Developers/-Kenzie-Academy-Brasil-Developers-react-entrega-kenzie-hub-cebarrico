import { SectionUser } from "./sectionUser";

export const UserHeader = ({ name, module }) => {
  return (
    <SectionUser>
      <div>
        <h1>Ola, {name}</h1>
        <span> {module}</span>
      </div>
    </SectionUser>
  );
};
