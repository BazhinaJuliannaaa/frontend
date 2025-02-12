import { useContext, useMemo, useRef, useState } from 'react';

import { ContentState } from '../ContentState';
import { ConfigContext } from '../ConfigProvider';

import { NotificationListItem } from './NotificationListItem';
import { NotificationListTabs } from './NotificationListTabs';
import { type Notification, type NotificationListType } from './types';
import { Footer, Header, List, StyledSideDialog } from './styles';
import { NotificationListEmpty } from './NotificationListEmpty';
import { NotificationListSettingsButton } from './NotificationListSettingsButton';

export type NotificationListProps = {
  /**
   * @description флаг управления отображением уведомлений
   * */
  isOpen: boolean;
  /**
   * @description Заголовок списка уведомлений
   * */
  title?: string;
  /**
   * @description флаг загрузки данных
   * */
  isLoading?: boolean;
  /**
   * @description флаг ошибки
   * */
  isError?: boolean;
  /**
   * @description Сообщение об ошибке
   * */
  errorMessage?: string;
  /**
   * @description список уведомлений
   * */
  notifications: Notification[];
  /**
   * @description список непрочитанных уведомлений
   * */
  unreadNotifications?: Notification[];
  /**
   * @description свойство определяет, какие уведомления выводить при открытии списка, все/непрочитанные
   * */
  initialListType?: NotificationListType;
  /**
   * @description слот для отображения дополнительных компонентов в заголовке
   * */
  headerContent?: React.ReactNode;
  /**
   * @description слот для отображения дополнительных компонентов в подвале
   * */
  footerContent?: React.ReactNode;
  /**
   * @description флаг для отображения кнопки настроек, если не передавать, то кнопка не отображается
   * */
  isSettingsButtonVisible?: boolean;
  /**
   * @description функция для закрытия уведомлений, передает id уведомлений, попавших во viewport
   * */
  onClose: (viewedIds: string[]) => void;
  /**
   * @description функция обработки удаления уведомления
   * */
  onDelete?: (id: string) => void;
  /**
   * @description функция обработки нажатия на кнопку настроек, если не передавать, то кнопка не отображается
   * */
  onSettingsButtonClick?: () => void;
  /**
   * @description функция обработки смены вкладки
   * */
  onTabChange?: () => void;
  /**
   * @description функция обработки нажатия на кнопку "Повторить запрос"
   * */
  onRetry?: () => void;
};

export const NotificationList = ({
  isOpen,
  title = 'Уведомления',
  isLoading,
  isError,
  errorMessage,
  notifications,
  unreadNotifications,
  initialListType = 'all',
  headerContent,
  footerContent,
  isSettingsButtonVisible = true,
  onClose,
  onDelete,
  onSettingsButtonClick,
  onTabChange,
  onRetry,
}: NotificationListProps) => {
  const { imagesMap } = useContext(ConfigContext);
  const [listType, setListType] =
    useState<NotificationListType>(initialListType);
  const viewedIds = useRef(new Set<string>());
  const data = useMemo(() => {
    if (unreadNotifications && listType === 'unread') {
      return unreadNotifications;
    }

    return notifications;
  }, [unreadNotifications, listType, notifications]);

  const isEmptyData = data.length === 0;
  const isTabsVisible = Boolean(unreadNotifications);

  const handleTabChange = (type: NotificationListType) => {
    setListType(type);

    if (onTabChange) {
      onTabChange();
    }
  };

  const handleView = (id: string) => {
    viewedIds.current.add(id);
  };

  const handleClose = () => {
    onClose(Array.from(viewedIds.current));
    viewedIds.current.clear();
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    }
  };

  return (
    <StyledSideDialog open={isOpen} onClose={handleClose}>
      <Header title={title} onClose={handleClose} justifyContent="flex-end">
        {headerContent}
        {isSettingsButtonVisible && (
          <NotificationListSettingsButton onClick={onSettingsButtonClick} />
        )}
      </Header>
      <ContentState
        isLoading={isLoading}
        isError={isError}
        errorState={{
          imgAlt: '',
          errorList: [errorMessage || ''],
          onRetry: handleRetry,
          imgSrc: imagesMap.defaultErrorImgSrc,
        }}
      >
        {isTabsVisible && (
          <NotificationListTabs
            onChange={handleTabChange}
            listType={listType}
            notificationsCount={notifications.length}
            unreadNotificationsCount={unreadNotifications?.length || 0}
          />
        )}
        {isEmptyData ? (
          <NotificationListEmpty
            listType={listType}
            noDataImgSrc={imagesMap.noDataImgSrc}
          />
        ) : (
          <>
            <List>
              {data.map((notification) => (
                <NotificationListItem
                  key={notification.id}
                  {...notification}
                  onDelete={onDelete}
                  onViewNotification={handleView}
                  isDeleteButtonVisible={Boolean(onDelete)}
                />
              ))}
            </List>
            {footerContent && <Footer>{footerContent}</Footer>}
          </>
        )}
      </ContentState>
    </StyledSideDialog>
  );
};
