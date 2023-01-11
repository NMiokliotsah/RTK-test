import useBindDispatch from 'src/app/hooks/useBindDispatch';
import {
  sortUpItems as _sortUpItems,
  sortDownItems as _sortDownItems,
} from 'src/entities/todo';
import { UpArrow, DownArrow } from 'src/shared/assets';
import Button from 'src/shared/ui/Button';
import Image from 'src/shared/ui/Image';
import style from './SortTodos.module.scss';

const SortTodos = () => {
  const sortUpItems = useBindDispatch(_sortUpItems);
  const sortDownItems = useBindDispatch(_sortDownItems);

  const handleSortUpButton = () => {
    sortUpItems();
  }

  const handleSortDownButton = () => {
    sortDownItems();
  }

  return <div className={style.container}>
    <div className={style.containerSortTodos}>
      <Button className='sortButton' onClick={handleSortDownButton}>
        <Image src={DownArrow} />
      </Button>
      <Button className='sortButton' onClick={handleSortUpButton}>
        <Image src={UpArrow} />
      </Button>
    </div>
  </div>
}

export default SortTodos;
