import { ReactNode } from "react";

interface ModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    children?: ReactNode; // 👈 phần nội dung bên trong modal
    footer?: ReactNode;   // 👈 optional: phần action button ở dưới
}

export default function Modal({ open, title, onClose, children, footer }: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn">
                {/* Title */}
                {title && <h2 className="text-xl font-semibold mb-3 text-center">{title}</h2>}

                {/* Content */}
                <div className="text-gray-600 mb-6 text-center">{children}</div>

                {/* Footer */}
                <div className="flex justify-center gap-3">
                    {footer ? (
                        footer
                    ) : (
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-xl bg-gray-400 hover:bg-gray-500 cursor-pointer"
                        >
                            Đóng
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
