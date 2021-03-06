/* eslint-disable import/extensions */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import GalleryHeader from './galleryHeader.jsx';
import GalleryContent from './galleryContent.jsx';
import GalleryFooter from './galleryFooter.jsx';

function GalleryView(props) {
  const { info, changeStatus, fullScreen } = props;
  const DialogContainer = styled.div`
    position: relative;
    height: auto;
    left: 0;
    bottom: 0;
    z-index: 10021;
    background: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
  `;
  return ReactDom.createPortal(
    <DialogContainer>
      <GalleryHeader info={info} changeStatus={changeStatus} />
      <GalleryContent fullScreen={fullScreen} images={info.images} />
      <GalleryFooter info={info} />
    </DialogContainer>,
    document.getElementById('modal'),
  );
}

export default GalleryView;
