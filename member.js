function skillsMember() {
  const member = this;
  const skills = member.skills;
  const skill = skills[Math.floor(Math.random() * skills.length)];
  return skill;
}