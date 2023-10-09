import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JoinTeam from '../joinTeam/index.js';

function JoinCodeCheck() {
  const router = useRouter();
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sendCode = router.query.joinCode;

    if (sendCode) {
      //Calls to API to get TeamCode
      // console.log("API call");
      // console.log(sendCode);
      //
      fetch('/api/fetchteamCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          joinCode: sendCode
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setApiResponse(data);
          setError(null);
        })
        .catch((error) => {
          setError(`API call failed: ${error.message}`);
          setApiResponse(null);
        });
    }
  }, [router.query.joinCode]);

  if (error) {
    router.push('/joinTeam/error');
    //return null; // Return null to prevent rendering the rest of the component
  }

  return (
    <div>
      {/* <h1>Join Code Check</h1>
      {apiResponse && (
        <div>
          <p>API Response:</p>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}*/}
      {apiResponse && <JoinTeam teamCode={apiResponse.teamCode} />} {/* Pass teamCode as a prop */}
      {/*error && <p>Error: {error}</p>*/}
    </div>
  );
}

export default JoinCodeCheck;
