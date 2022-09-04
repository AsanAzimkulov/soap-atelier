import classNames from 'classnames';
import React, { useState, useRef, useLayoutEffect } from 'react';
import s from './index.module.scss';

const Text = () => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const [isHeightEnough, setIsHeightEnough] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (ref.current) {
      setIsHeightEnough(ref.current?.getBoundingClientRect().height > 350);
    }
  }, [ref.current])

  return (
    <div ref={ref} className={classNames(s.root, {
      [s.root_withReadMore]: isHeightEnough
    })}>
      <h2 className={s.title}>Купить мыло в Бишкеке</h2>
      <p className={s.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit soluta dolorum recusandae temporibus dicta, dolores provident consectetur. Iusto natus provident cum, hic, enim ab eum perspiciatis qui ex id dolore!
        Recusandae doloremque soluta, assumenda aut nulla sit aliquid laborum similique praesentium itaque delectus nobis necessitatibus explicabo! Magni autem fugit vel qui dignissimos doloribus officia, sapiente itaque molestias, velit ullam reprehenderit?</p>
      <h3 className={s.caption}>В нашем каталоге более 20 видов мыла</h3>
      <ul className={s.markedList}>
        <li className={s.markedList_item}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li className={s.markedList_item}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
        <li className={s.markedList_item}>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
      </ul>
      <p className={s.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus harum pariatur magni earum nulla molestias sint nihil at explicabo ratione praesentium alias aperiam illum, recusandae soluta eligendi architecto corporis placeat.
        Aperiam labore quos accusantium numquam quia voluptatibus error? At, eveniet nihil. Rerum deserunt delectus, temporibus ipsa dignissimos dolores illum, autem ut et perferendis accusamus cupiditate atque expedita ullam laborum consequatur?
        Molestias debitis, illum optio dolores at quaerat autem a repudiandae ex repellat, officia quibusdam libero voluptas temporibus dolore ut nostrum fugiat doloribus? Ipsum consequuntur animi, voluptates voluptas odit molestias natus!
        Architecto voluptatem molestiae provident eaque quaerat velit tempore illum expedita, illo sunt reiciendis temporibus porro debitis similique vel deleniti ex at aut mollitia, cupiditate quidem amet eius? Harum, voluptatem incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veniam ducimus voluptatem, nam dolorum vitae at harum architecto nisi aliquid, impedit repellat culpa omnis, animi minima! Molestias dolor delectus odit.
        Recusandae, beatae mollitia! Dicta laudantium atque impedit harum vero molestias? Autem reiciendis delectus modi velit quis voluptate, tempore, illo nisi excepturi eius obcaecati vitae laborum est inventore eligendi odit quas!
        Natus nam nostrum facilis explicabo sit repellendus qui enim harum ad iusto ratione autem voluptatum aspernatur architecto inventore, tenetur voluptates placeat? Dignissimos nemo blanditiis necessitatibus quae vel hic commodi perferendis.
        Impedit cumque cupiditate iusto ratione ut modi natus consequuntur consectetur aperiam maxime nihil est nostrum iste quod reiciendis id perspiciatis illum, debitis placeat, ipsum dolore eos delectus. Expedita, tempora sed.
        Veritatis obcaecati qui soluta ipsum labore accusantium porro iste aut ducimus! Dolorum vero cum facilis animi omnis fugiat placeat id accusantium quis reiciendis ducimus voluptatem quod aspernatur atque, labore doloremque.
        Quas consequatur, blanditiis commodi consequuntur sit aut. Assumenda omnis necessitatibus hic esse ipsum debitis quibusdam vero! Omnis quisquam necessitatibus esse, quasi animi laborum suscipit explicabo voluptates nemo quae debitis ad?
        Nulla porro ducimus sunt aperiam quisquam magnam quaerat repellat natus quas blanditiis numquam quasi neque eaque, sit itaque, accusamus nobis accusantium sapiente a fugiat. Totam doloribus fuga unde ut magnam?
        Quas dolor veniam quibusdam saepe eum corporis rerum necessitatibus magni. Officiis ducimus quia non tenetur maxime ipsam qui voluptas saepe. Ab, sequi. Magnam incidunt itaque ullam, quod esse amet pariatur.</p>
      <div className={s.readMore}>
        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.classList.add(s.readMore_button_open);
          setTimeout(() => setIsHeightEnough(false), 2000)
        }} className={classNames(s.readMore_button, {
          [s.readMore_button_open]: isReadMore
        })}>
          Подробнее
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none" className={s.readMore_button_icon}>
            <path d="M16 1L8.5 8L1 0.999999" stroke="#F46D40" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Text
