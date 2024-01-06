import AdminSkillsInfo from 'components/AdminComponents/AdminSkillsInfo/AdminSkillsInfo';
import AdminSkillsItems from 'components/AdminComponents/AdminSkillsItems/AdminSkillsItems';

import './_AdminSkills.scss';

function AdminSkills({ endpoint }) {
  return (
    <>
      <AdminSkillsInfo endpoint={endpoint} />
      <AdminSkillsItems endpoint={endpoint} />
    </>
  );
}

export default AdminSkills;
