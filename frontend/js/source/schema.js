
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 'id',
    label: '#',
    pathJSON: 'id',
    show: false,
    editable: false,
    autoFilling: false,
    type: 'input', 
    sample: 1425,
    align: 'center',
  },
  {
    id: 'CompanyName',
    label: 'Компания',
    pathJSON: 'CompanyId.ShortName',
    type: 'input',
    show: false,
    editable: false, 
    autoFilling: false,
    sample: 1,
  },
  {
    id: 'TaskId',
    label: 'TaskId',
    pathJSON: 'TaskId', 
    type: 'input',
    show: false,
    editable: false,
    autoFilling: false,
    sample: '_01439',
    align: 'center',
  },
  {
    id: 'TaskName',
    label: 'Название', 
    pathJSON: 'TaskName',
    show: true,
    editable: true,
    autoFilling: false,
    type: 'text',
    sample: '_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.',
    align: 'center',
  },

  {
    id: 'DateRegistration',
    label: 'DateRegistration',
    pathJSON: 'DateRegistration',
    type: 'input', 
    show: false,
    editable: false,
    autoFilling: false,
    sample: '2023-03-29T00:00:00+03:00',
  },
  
  {
    id: 'SituationType',
    label: 'SituationType',
    pathJSON: 'SituationType.SituationType',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'ServiceName',
    label: 'ServiceName',
    pathJSON: 'ServiceName.[].ServiceName',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'PersonFullNameId',
    label: 'PersonFullName',
    pathJSON: 'PersonFullNameId.PersonFullName',
    objName: '',
    type: 'input',
    show: true,
    editable: true,
    autoFilling: false,
    sample: 'Денисов Николай Валерьевич',
    dataURL: "people/"
  },
    

  {
    id: 'ITTaskTypeName',
    label: 'ITTaskTypeName',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'TypeOfActionName',
    label: 'TypeOfActionName',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Description',
    label: 'Description',
    pathJSON: '',
    type: 'text',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'CategoryOfTaskName',
    label: 'CategoryOfTaskName',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'ResultOfTaskName',
    label: 'ResultOfTaskName',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'DateOfDone',
    label: 'DateOfDone',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Comments',
    label: 'Comments',
    pathJSON: '',
    type: 'text',
    show: true,
    editable: true,
    autoFilling: false,
    sample: '  ',
  },
    

  {
    id: 'manual_selection',
    label: 'manual_selection',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'manual_sort',
    label: 'manual_sort',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'PriorityColor',
    label: 'PriorityColor',
    pathJSON: '',
    type: 'input',
    show: true,
    editable: false,
    autoFilling: false,
    sample: '6',
  },
    

  {
    id: 'ProjectName',
    label: 'ProjectName',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false, //true
    sample: '',
  },
    

  {
    id: 'Priority',
    label: 'Priority',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Author',
    label: 'Author',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'TaskTypeId',
    label: 'TaskTypeId',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'EffortsId',
    label: 'EffortsId',
    pathJSON: '',
    type: 'input',
    show: false,
    editable: true,
    autoFilling: false,
    sample: '',
  },

]

