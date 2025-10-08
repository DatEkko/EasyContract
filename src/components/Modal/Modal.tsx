import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    open: boolean;
    title?: string;
    onClose: () => void;
    children?: ReactNode;
    footer?: ReactNode;
}

export default function Modal({ open, title, onClose, children, footer }: ModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn relative">
                {/* Title */}
                {title && <h2 className="text-xl font-semibold mb-3 mt-2 text-center">{title}</h2>}

                {/* Content */}
                <div className="text-gray-600 mb-6 text-center">{children}</div>

                {/* Footer */}
                <div className="absolute right-0 top-0">
                    {footer ? (
                        footer
                    ) : (
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-2xl font-bold cursor-pointer text-red-600"
                        >
                            <IoClose />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
