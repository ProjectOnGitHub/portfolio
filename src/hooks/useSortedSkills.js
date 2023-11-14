import { useEffect, useState } from 'react';

function useSortedSkills(defaultSkills) {
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (defaultSkills?.length) {
      const updateSkills = {};
      defaultSkills.forEach((skill) => {
        if (!updateSkills[skill.type]) {
          updateSkills[skill.type] = {
            type: skill.type,
            sectionTitle: skill.sectionTitle,
            skills: [],
          };
        }
        updateSkills[skill.type].skills.push(skill);
      });
      setSortedItems(updateSkills);
    }
  }, [defaultSkills]);

  return sortedItems;
}

export default useSortedSkills;
