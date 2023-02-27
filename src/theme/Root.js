import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase'; 
import Loading from './Loading'; 
import { Redirect } from '@docusaurus/router';

export const AuthContext = createContext("")

// Default implementation, that you can customize
export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);


  auth.onAuthStateChanged(async function (user) {
    if (user !== null) {
      setUserAuth(user);
    }
    setAuthLoading(false);
  });


  const checkDocPage = () => {
    let url = window.location.href;
    let appurl = "http://localhost:3000/"
    let pageStatus = url.includes("docs", appurl.length)
    return pageStatus;
  }
  
  let content

  if (authLoading) {
    content = <>
      <Loading />
      <div style={{ display: 'none' }}>{children}</div>
    </>
  }
  else if(!userAuth?.uid && checkDocPage()){
    content = <Redirect to="/account" />
  }
  else {
    const data = {
      userAuth, 
      authLoading
    }
    content = <>
      <AuthContext.Provider value={data}>
        {children}
      </AuthContext.Provider>
    </>
  }

  return (
    <>
      {content}
    </>
  );
}