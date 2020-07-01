'use strict';

const btnContainer = document.getElementsByClassName(
  'd-flex flex-justify-end m-2'
)[0];

const copyCommitBtn = document.createElement('button');

copyCommitBtn.type = 'button';
copyCommitBtn.className = 'btn btn-secondary';
copyCommitBtn.style.margin = '0px 5px';
copyCommitBtn.innerHTML = 'Copy commits';

btnContainer.insertBefore(copyCommitBtn, btnContainer.firstChild);
