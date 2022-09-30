import DefaultButton from '../ui/DefaultButton';
import bgBoostMobile from '../../assets/images/bg-boost-mobile.svg';
import bgBoostDesktop from '../../assets/images/bg-boost-desktop.svg';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

const initShortenLinks = localStorage.getItem('shorten-links')
  ? JSON.parse(localStorage.getItem('shorten-links') || '')
  : [];
const initEnteredLinks = localStorage.getItem('entered-links')
  ? JSON.parse(localStorage.getItem('entered-links') || '')
  : [];

const Form: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shortenedLinks, setShortenedLinks] = useState<string[]>(initShortenLinks);
  const [enteredLinks, setEnteredLinks] = useState<string[]>(initEnteredLinks);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedTextToClickboard, setCopiedTextToClickboard] = useState('');

  const linkValidation = (enteredLink: string) => {
    const linkPattern = new RegExp(
      /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
    );
    return linkPattern.test(enteredLink) || setErrorMessage('Please add a valid link');
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (!inputRef.current?.value) return;
    const enteredLink = inputRef.current.value.trim();

    if (enteredLink.length === 0) {
      setErrorMessage('Please add a link');
      return;
    }

    const alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789';

    let randomString = 'https://rel.ink/';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[randomIndex];
    }

    inputRef.current.value = '';
    if (!linkValidation(enteredLink)) return;

    setEnteredLinks((prevState) => [...prevState, enteredLink]);
    setShortenedLinks((prevState) => [...prevState, randomString]);
  };

  const copyToClickboard = async (event: React.FormEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.previousSibling?.textContent) return;
    setCopiedTextToClickboard(event.currentTarget.previousSibling.textContent);
    await navigator.clipboard.writeText(event.currentTarget.previousSibling.textContent);
  };

  const clearErrorMessage = () => {
    setErrorMessage('');
  };

  useEffect(() => {
    localStorage.setItem('shorten-links', JSON.stringify(shortenedLinks));
    localStorage.setItem('entered-links', JSON.stringify(enteredLinks));
  }, [shortenedLinks]);

  return (
    <>
      <div className='relative w-full '>
        <div className='overflow-hidden rounded-lg -translate-y-1/2'>
          <img
            src={bgBoostMobile}
            alt=''
            className='inset-0 bg-primary-dark-violet w-full max-h-[200px] lg:hidden'
          />
          <img
            src={bgBoostDesktop}
            alt=''
            className='inset-0 bg-primary-dark-violet w-full hidden max-h-[180px] lg:block'
          />
          <form
            onSubmit={onSubmit}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full  items-center justify-center lg:items-start lg:px-20 lg:pb-5 lg:pt-10 p-7'
          >
            <div className='w-full flex flex-col lg:flex-row'>
              <input
                type='text'
                className={`rounded-md p-3 w-full lg:mr-8 md:text-lg lg:px-5  ${
                  errorMessage.length !== 0 ? 'border-4 border-secondary-red' : 'border-transparent'
                }`}
                aria-label='link'
                placeholder='Shorten a link here...'
                ref={inputRef}
                onFocus={clearErrorMessage}
              />
              {errorMessage.length !== 0 && (
                <small className='lg:hidden text-secondary-red mt-1'>{errorMessage}</small>
              )}
              {errorMessage.length === 0 && (
                <small className='lg:hidden text-secondary-red mt-1 h-5 w-5'></small>
              )}
              <DefaultButton type='submit'>Shorten it!</DefaultButton>
            </div>
            {errorMessage.length !== 0 && (
              <small className='hidden lg:flex items-start justify-start text-left text-lg mt-2 text-secondary-red'>
                {errorMessage}
              </small>
            )}
            {errorMessage.length === 0 && (
              <small className='w-5 h-7 hidden lg:flex items-start justify-start text-left text-lg mt-2 text-secondary-red'></small>
            )}
          </form>
        </div>
        <div className='-mt-20 lg:-mt-14 mb-28'>
          {shortenedLinks.map((shortenedLink, index) => (
            <div
              key={uuid()}
              className='flex items-center justify-center flex-col lg:flex-row lg:justify-between bg-white lg:px-10 lg:py-6 rounded-lg mb-6'
            >
              <p className='px-5 py-3 lg:p-0 lg:text-lg truncate w-full'>{enteredLinks[index]}</p>
              <div className='w-full h-[2px] bg-neutral-gray lg:hidden' />
              <div className='px-5 mb-5 flex items-start flex-col lg:flex-row lg:mb-0 lg:items-center w-full lg:max-w-max'>
                <p className='text-primary-cyan py-3 lg:py-0 lg:mr-5 lg:text-lg text-left'>
                  {shortenedLink}
                </p>
                <button
                  type='button'
                  className={`w-full lg:w-36 text-center text-white bg-primary-cyan py-3 rounded-lg lg:px-10 hover:opacity-70 transition-opacity duration-300 font-bold ${
                    copiedTextToClickboard === shortenedLink
                      ? 'bg-primary-dark-violet'
                      : 'bg-primary-cyan'
                  }`}
                  onClick={copyToClickboard}
                >
                  {copiedTextToClickboard === shortenedLink ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Form;
