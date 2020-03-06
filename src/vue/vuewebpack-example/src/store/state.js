export default{
  // ajax data
  data: null,

  agree: false,

  pageTitle: {
    about: 'About',
    contact: 'Contact',
    question: 'question',
    dataLoader: 'dataLoader',
  },

  count: 0,

  buttons: {
    next: { label: 'next' },
    edit: { label: 'edit' }
  },

  currentQnum: 0,

  questions: [
    {
      title: 'Which one is your favious fruits.',
      name: 'fruit',
      answers: ['apple', 'orange', 'banana', 'melon', 'water melon'],
      isCompleted: false,
      active: true,
      ans: ''
    },
    {
      title: 'What color do you like.',
      name: 'color',
      answers: ['purple', 'red', 'skyblue', 'green', 'yellow'],
      isCompleted: false,
      active: false,
      ans: ''
    },
    {
      title: 'What did you do this summer.',
      name: 'summer',
      answers: ['swimming', 'traveling', 'singing', 'climbing', 'hiking'],
      isCompleted: false,
      active: false,
      ans: ''
    },
    {
      title: 'Which os do you use.',
      name: 'os',
      answers: ['iOS', 'Andirod', 'macOS', 'Linux', 'UNIX'],
      isCompleted: false,
      active: false,
      ans: ''
    },
  ]
}
