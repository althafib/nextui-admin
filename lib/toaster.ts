import { toast } from "sonner";
import { Trash2, CheckCircleIcon } from "lucide-react";
import { type ReactNode } from "react";

export function successToast(data: {
  message?: string;
  icon?: ReactNode;
  duration?: number;
  dismissible?: boolean;
}) {
  toast("Success", {
    description: data.message || "Operation completed successfully.",
    icon: data.icon,
    duration: data.duration || 1500,
    dismissible: data.dismissible || true,
    closeButton: false,
  });
}

export function errorToast(data: {
  message?: string;
  icon?: ReactNode;
  duration?: number;
  dismissible?: boolean;
}) {
  toast("Error", {
    description: data.message || "Something went wrong!",
    icon: data.icon,
    duration: data.duration || 1500,
    dismissible: data.dismissible || false,
    closeButton: false,
  });
}

export function confirmationToast(data: {
  title?: string;
  message: string;
  btnLabel: string;
  cancelBtnLabel: string;
  icon?: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  toast(data.title || "Are you sure?", {
    description: data.message || "You want do this?",
    icon: data.icon,
    duration: 10000,
    closeButton: false,
    cancel: {
      label: data.cancelBtnLabel,
      onClick: (e) => {
        data.onCancel();
      },
    },
    action: {
      label: data.btnLabel,
      onClick: (e) => {
        data.onConfirm();
      },
      actionButtonStyle: { color: "white", backgroundColor: "purple" },
    },
  });
}
