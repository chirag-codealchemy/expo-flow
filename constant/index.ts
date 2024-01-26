import { IMAGES } from 'assets';

export const COMPONENT_LIST = [
  {
    title: 'Basic',
    color: 'rgb(89, 192, 89)',
    darkColor: 'rgb(56, 148, 56)',
    data: [
      {
        name: 'View',
        icon: IMAGES.view,
      },
      {
        name: 'Text',
        icon: IMAGES.text,
      },
      {
        name: 'Image',
        icon: IMAGES.image,
      },
      {
        name: 'Text Input',
        icon: IMAGES.textInput,
      },
      {
        name: 'Scroll View',
      },
    ],
  },
  {
    title: 'Interface',
    color: 'rgb(255, 191, 0)',
    darkColor: 'rgb(204, 153, 0)',

    data: [
      {
        name: 'Button',
      },
      {
        name: 'Switch',
      },
    ],
  },

  {
    title: 'Lists',
    color: 'rgb(76, 151, 255)',
    darkColor: 'rgb(51, 115, 204)',
    data: [
      {
        name: 'FlatList',
      },
      {
        name: 'SectionList',
      },
    ],
  },

  {
    title: 'Others',
    color: 'rgb(255, 102, 128)',
    darkColor: 'rgb(255, 51, 85)',
    data: [
      {
        name: 'ActivityIndicator',
      },
      {
        name: 'Alert',
      },
      {
        name: 'KeyboardAvoidingView',
      },
      {
        name: 'Modal',
      },
      {
        name: 'RefreshControl',
      },
    ],
  },
];
