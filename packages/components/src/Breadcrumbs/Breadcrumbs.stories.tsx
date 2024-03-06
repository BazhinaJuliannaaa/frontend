import { type Meta, type StoryObj } from '@storybook/react';
import { Link } from '@mui/material';
import { AddOutlineMd } from '@astral/icons';

import { Typography } from '../Typography';
import { PageHeader } from '../PageHeader';

import { Breadcrumbs } from './';

/**
 * Весь текст должен задаваться через Typography.
 *
 * ### [Figma](https://www.figma.com/file/3ghN4WjSgkKx5rETR64jqh/Sirius-Design-System-(АКТУАЛЬНО)?type=design&node-id=9920-130898&mode=design&t=mOOIr76kWDphX4Ah-0)
 * ### [Guide]()
 */

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

const handleClick = (event: React.MouseEvent) => {
  event.preventDefault();
};

const createBreadcrumbsCase = (args: string[]) => {
  const lastChild: string = args.pop() || '';
  const result = [];

  args.forEach((element, index) => {
    result.push(
      <Link
        underline="hover"
        color="#557192"
        key={index}
        href="/"
        onClick={handleClick}
      >
        {element}
      </Link>,
    );
  });

  result.push(<Typography key={args.length}>{lastChild}</Typography>);

  return result;
};

export const Interaction: Story = {
  args: {
    children: createBreadcrumbsCase([
      'Раздел 1',
      'Раздел 2',
      'Раздел 3',
      'Раздел 4',
    ]),
    expandText: 'Show path',
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 1,
    maxItems: 8,
    separator: '/',
  },
  parameters: {
    docs: {
      disable: true,
    },
  },
};

/**
 * Breadcrumbs, или хлебные крошки — представляет собой навигационную цепочку на сайте, которая отражает путь до текущей страницы.
 *
 * Компонент располагается над заголовком
 *
 * Может использоваться в сервисах со сложной структурой, для информирования пользователя о его текущем местонахождении на сайте.
 */
export const Example = () => {
  return (
    <PageHeader
      title="Новый отчет"
      actions={{
        main: [
          {
            text: 'Основное действие',
            startIcon: <AddOutlineMd />,
          },
        ],
        secondary: [
          {
            text: 'Второстепенное действие',
          },
        ],
      }}
      breadcrumbs={createBreadcrumbsCase([
        'Раздел 1',
        'Раздел 2',
        'Создание отчета',
      ])}
    />
  );
};

/**
 * Стандартный вид компонента представляет собой перечисление элементов навигационной цепочки через “/”.
 */
export const Standart = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {createBreadcrumbsCase(['Раздел 1', 'Раздел 2', 'Раздел 3'])}
    </Breadcrumbs>
  );
};

/**
 * Сокращенный вид компонента представляет собой скрытие 2х и более элементов навигации под “...”, которые занимают в 
       цепочке не первое и не последнее место. При клике на данный элемент должен появляться компонент “Menu” со списком 
       скрытых страниц на которые пользователь может переместиться по клику.Такой компонет может быть использован при нехватке
        пространства для отображения всех элементов навигации, при масштабировании страницы и в других случаях предусмотренных 
        дизайнером. 
 */
export const Shortcut = () => {
  return (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      {createBreadcrumbsCase(['Раздел 1', 'Раздел 2', 'Раздел 3'])}
    </Breadcrumbs>
  );
};
