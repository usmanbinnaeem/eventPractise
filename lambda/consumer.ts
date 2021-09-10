exports.handler = async function (event: any) {
   console.log(`${JSON.stringify(event)}`);
   
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: `consumer event executed ${JSON.stringify(event)}`,
    };
  };
  