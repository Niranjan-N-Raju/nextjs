import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
    <div>
        <h1>The main page</h1>
        <p>Go to
            <Link href='/autah'>
                <a>Auth</a>
            </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Auth</button>
    </div>
);

export default indexPage