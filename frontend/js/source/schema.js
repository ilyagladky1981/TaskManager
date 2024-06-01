
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    id: 'id',
    label: '#',
    pathJSON: 'id',
    objName: 'id',
    show: false,
    editable: false,
    autoFilling: false,
    type: 'input', 
    ObjectInputType: 'input',
    sample: 1425,
    align: 'center',
  },
  {
    id: 'CompanyName',
    label: 'Компания',
    pathJSON: 'CompanyId.ShortName',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false, 
    autoFilling: false,
    sample: 1,
  },
  {
    id: 'TaskId',
    label: 'TaskId',
    pathJSON: 'TaskId', 
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '_01439',
    align: 'center',
  },
  {
    id: 'TaskName',
    label: 'Название', 
    pathJSON: 'TaskName',
    objName: 'id',
    show: true,
    editable: true,
    addnew: false,
    autoFilling: false,
    type: 'text',
    ObjectInputType: 'text',
    sample: '_17 Проект. Подключить Wi-Fi для Денисова Николая и Нечаева Дмитрия.',
    align: 'center',
  },

  {
    id: 'DateRegistration',
    label: 'DateRegistration',
    pathJSON: 'DateRegistration',
    objName: 'id',
    type: 'input', 
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '2023-03-29T00:00:00+03:00',
  },
  
  {
    id: 'SituationType',
    label: 'Ситуация',
    pathJSON: 'SituationType.SituationType',
    objName: 'SituationType',
    type: 'input',
    ObjectInputType: 'ListOptions',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'ServiceName',
    label: 'Сервис',
    pathJSON: 'ServiceName.[].ServiceName',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'PersonFullNameId',
    label: 'ФИО заказчика',
    pathJSON: 'PersonFullNameId.PersonFullName',
    objName: 'id',
    objName: 'PersonFullName',
    type: 'input',
    ObjectInputType: 'ListOptions',
    show: true,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: 'Денисов Николай Валерьевич',
    dataURL: "people/"
  },
    

  {
    id: 'ITTaskTypeName',
    label: 'ITTaskTypeName',
    pathJSON: 'ITTaskTypeName.ITTaskTypeName',
    objName: 'ITTaskTypeName',
    type: 'input',
    ObjectInputType: 'ListOptions',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'TypeOfActionName',
    label: 'TypeOfActionName',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Description',
    label: 'Description',
    pathJSON: '',
    objName: 'id',
    type: 'text',
    ObjectInputType: 'text',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'CategoryOfTaskName',
    label: 'CategoryOfTaskName',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'ResultOfTaskName',
    label: 'ResultOfTaskName',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'DateOfDone',
    label: 'DateOfDone',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Comments',
    label: 'Comments',
    pathJSON: '',
    objName: 'id',
    type: 'text',
    ObjectInputType: 'text',
    show: true,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '  ',
  },
    

  {
    id: 'manual_selection',
    label: 'manual_selection',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'manual_sort',
    label: 'manual_sort',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'PriorityColor',
    label: 'PriorityColor',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: true,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '6',
  },
    

  {
    id: 'ProjectName',
    label: 'ProjectName',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false, //true
    sample: '',
  },
    

  {
    id: 'Priority',
    label: 'Priority',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: false,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'Author',
    label: 'Author',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: false,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'TaskTypeId',
    label: 'TaskTypeId',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: true,
    autoFilling: false,
    sample: '',
  },
    

  {
    id: 'EffortsId',
    label: 'EffortsId',
    pathJSON: '',
    objName: 'id',
    type: 'input',
    ObjectInputType: 'input',
    show: false,
    editable: true,
    addnew: false,
    autoFilling: false,
    sample: '',
  },

]

