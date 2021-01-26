import { BehaviorSubject } from 'rxjs';
import { toast, Zoom } from 'react-toastify';

const notifications = new BehaviorSubject(null);

class NotificationService {
  notifications = notifications.asObservable();
  configuration = {
    position: toast.POSITION.TOP_RIGHT,
    transition: Zoom
  }

  sendNotification = (message: any, type: symbol ) => {
    try {
      if (message) {
        const msg: any = message instanceof String ? message : message.toString();

        switch (type) {
          case AlertTypes.success:
           toast.success(msg, this.configuration);
            break;
          case AlertTypes.info:
           toast.info(msg, this.configuration);
            break;
          case AlertTypes.warn:
           toast.warn(msg, this.configuration);
            break;
          case AlertTypes.error:
           toast.error(msg, this.configuration);
            break;
          default:
           toast(msg, this.configuration);
            break;
        }
      }
    } catch (ex) {
     toast.error(ex.message, this.configuration);
    }
    notifications.next(null);
  }
}

const Notify = new NotificationService();

export default Notify;

export const AlertTypes = Object.freeze({
  success: Symbol('success'),
  info: Symbol('info'),
  warn: Symbol('warn'),
  error: Symbol('error')
});