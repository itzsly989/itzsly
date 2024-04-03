/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Itzsly',
  lastName: '',
  jobTitle: 'Jr.Developer',
  photo: 'null',
  city: 'Medellin',
  postalCode: '050022',
  country: 'Colombia',
  phone: '+573505325406',
  email: 'josemb125@gmail.com',
  education: [
    {
      school: 'Siglo 21',
      description: 'Software Engineering',
    },
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/mtslxw',
    },
  ],
  skills: [
    'JavaScript',
    'CSS',
    'TypeScript',
    'NodeJs',
    'C#',
    'Python',
    'MongoDB',
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `I'm mtslxw and I typically work with Python and Lua. I started learning how to code about 2017-18, when I was bored grown on me, as well as learning about how computers interact with others and how they work internally. Hopefully in the future, I can get into software development. .`,
  employmentHistory: [
    {
      jobTitle: 'FiveM',
      startDate: 'December 2020-2024',
      city: 'Remote',
      achievements: [
        `During my professional career, I have had the opportunity to work on a variety of projects, exploring different areas and challenges. However, among all of them, my contribution to the creation and management of servers for the roleplay platform known as FiveM, under the names TabladaRP and PlanteoCityRP, among other equally remarkable projects, stands out.`,
      ],
    },
    {
      jobTitle: 'Web Developer',
      startDate: '2024',
      achievements: [
        `creating websites for business. For some time now, I have been immersed in the exciting world of web design and development, and I must say that it is an incredibly rewarding experience.

        My main focus is on helping businesses of all sizes establish their online presence effectively. I believe that a solid digital presence is critical in today's business world, which is why I am dedicated to building websites that are not only visually appealing, but also functional and results-oriented.`,
      ],
    },
  ],
};

const formatResume = (r) => ({
  ...r,
  address: [r.country, r.city, r.postalCode].filter(Boolean).join(', '),
});

new Vue({
  el: '#app',
  data: formatResume(resume),
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded();
