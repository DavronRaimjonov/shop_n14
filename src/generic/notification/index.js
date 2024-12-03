import { notification } from "antd";

const notificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "add":
        return notification.success({ message: "Added product" });

      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
