import clsx from 'clsx';
import './Loader.scss';

interface IProps {
  className?: string;
}

export const Loader = ({ className }: IProps) => (
  <span className={clsx('loader', className)} role="status" aria-label="Загрузка" />
);
