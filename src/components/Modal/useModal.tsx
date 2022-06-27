import React, {
  cloneElement,
  createContext,
  ReactNode,
  isValidElement,
  useState,
  ReactElement,
  useCallback,
  ComponentType,
  useContext,
  useMemo,
  useRef,
} from 'react';

interface CommonModalProps {
  open: boolean;
  onClose: () => void;
}

type RenderFunction<T> = (event: {
  onConfirm: (data?: any) => void;
  onCancel: () => void;
}) => ReactElement | ComponentType<T>;

type ModalOpen<P extends CommonModalProps = CommonModalProps> = (
  render: RenderFunction<P>,
) => Promise<Resolver>;

interface Props {
  children: ReactNode;
}

interface ModalContextValue {
  open: ModalOpen;
}

export const ModalContext = createContext<ModalContextValue>({
  open: () => {
    throw new Error('Need to initialize ModalContext');
  },
});

const noop = () => {};

interface Resolver {
  comfirm: boolean;
  data?: any;
}

function ModalProvider({children}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalNode, setModalNode] = useState<ReactNode>(null);

  const resolver = useRef<(result: Resolver) => void>(noop);

  const handleConfirm = useCallback((data?: any) => {
    resolver.current?.({
      comfirm: true,
      data,
    });
    setIsModalOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    resolver.current?.({
      comfirm: false,
    });
    setIsModalOpen(false);
  }, []);

  const open = useCallback(
    <T extends CommonModalProps>(
      render: RenderFunction<T>,
    ): Promise<Resolver> => {
      return new Promise<Resolver>(resolve => {
        resolver.current = resolve;

        const element = render({
          onConfirm: handleConfirm,
          onCancel: handleCancel,
        });

        setModalNode(element);
        setIsModalOpen(true);
      });
    },
    [handleCancel, handleConfirm],
  );

  const context = useMemo((): ModalContextValue => {
    return {open};
  }, [open]);

  return (
    <ModalContext.Provider value={context}>
      {children}
      {isValidElement(modalNode) && isModalOpen
        ? cloneElement(modalNode, {
            onClose: handleCancel,
            ...modalNode.props,
            open,
          })
        : null}
    </ModalContext.Provider>
  );
}

export function useModal<T>() {
  return useContext(ModalContext);
}

export {ModalProvider};
