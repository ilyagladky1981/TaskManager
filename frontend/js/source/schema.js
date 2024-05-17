
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 'id',
    label: '#',
    pathJSON: 'id',
    show: false,
    editable: false,
    sample: 1425,
    align: 'left',
  },
  {
    id: 'CompanyName',
    label: 'Компания',
    pathJSON: 'CompanyId.ShortName',
    show: false,
    editable: false,
    sample: 1,
  },
  {
    id: 'TaskId',
    label: 'TaskId',
    pathJSON: 'TaskId',
    type: 'input', 
    show: false,
    editable: false,
    sample: '_01439',
    align: 'left',
  },
  {
    id: 'TaskName',
    label: 'Название', 
    pathJSON: 'TaskName',
    show: true,
    type: 'text',
    sample: '_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.',
    align: 'left',
  },

  {
    id: 'DateRegistration',
    label: 'DateRegistration',
    pathJSON: 'DateRegistration',
    type: 'input', 
    show: false,
    editable: false,
    sample: '2023-03-29T00:00:00+03:00',
  },
  
  {
    id: 'SituationType',
    label: 'SituationType',
    pathJSON: 'SituationType.SituationType',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'ServiceName',
    label: 'ServiceName',
    pathJSON: 'ServiceName.[].ServiceName',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'PersonFullNameId',
    label: 'PersonFullName',
    pathJSON: 'PersonFullNameId.PersonFullName',
    type: 'input',
    show: true,
    sample: 'Денисов Николай Валерьевич',
  },
    

  {
    id: 'ITTaskTypeName',
    label: 'ITTaskTypeName',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'TypeOfActionName',
    label: 'TypeOfActionName',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'Description',
    label: 'Description',
    pathJSON: '',
    type: 'text',
    show: false,
    sample: '',
  },
    

  {
    id: 'CategoryOfTaskName',
    label: 'CategoryOfTaskName',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'ResultOfTaskName',
    label: 'ResultOfTaskName',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'DateOfDone',
    label: 'DateOfDone',
    pathJSON: '',
    type: 'input',
    editable: false,
    show: false,
    sample: '',
  },
    

  {
    id: 'Comments',
    label: 'Comments',
    pathJSON: '',
    type: 'text',
    show: true,
    sample: '  ',
  },
    

  {
    id: 'manual_selection',
    label: 'manual_selection',
    pathJSON: '',
    type: 'input',
    editable: false,
    show: false,
    sample: '',
  },
    

  {
    id: 'manual_sort',
    label: 'manual_sort',
    pathJSON: '',
    type: 'input',
    editable: false,
    show: false,
    sample: '',
  },
    

  {
    id: 'PriorityColor',
    label: 'PriorityColor',
    pathJSON: '',
    type: 'input',
    show: true,
    editable: false,
    sample: '6',
  },
    

  {
    id: 'ProjectName',
    label: 'ProjectName',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'Priority',
    label: 'Priority',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: false,
    sample: '',
  },
    

  {
    id: 'Author',
    label: 'Author',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'TaskTypeId',
    label: 'TaskTypeId',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },
    

  {
    id: 'EffortsId',
    label: 'EffortsId',
    pathJSON: '',
    type: 'input',
    show: false,
    sample: '',
  },

]

