import { BedrockRuntimeClient, InvokeModelCommand} from '@aws-sdk/client-bedrock-runtime'

const AWS_DEFAULT_REGION = "us-west-2"
const AWS_ACCESS_KEY_ID="ASIA42BKWTM3FKSY2EHF"
const AWS_SECRET_ACCESS_KEY="wXTGOl9RGrb2jDo4gjjw5n+gcnJ5ajoxa8VHJkX4"
const AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjEFoaCXVzLWVhc3QtMSJHMEUCIDEfs5416Zq/MMkL8jwhGzxZqVvKPtte3qqKZii0zMsGAiEAwbLwZSsFLyb7QDD4NSGqm9VEafFINUBmxEgt4TXtaKsqmQIIUxACGgw4ODA1NTc4NTc1OTAiDKhw2qF3xl4o10+bHir2AZ60Q/pzbtoiN5AnezI8Ft2jLW5vUedivG4tdp/CqsjicU+cwXFSCCXVQqOnaJY+8U59n6NiqEskI44w4vfj1MxqtGFgDbVvvJd0zGnUuqKQ7jx4ezCbEPKB9lB5j//NOOm+6MT1nNXb1g75zvypnlGZeavYFexu8fG+kZG8QOgQKa65F1ucurtnubiLqxWzn481ZvIOGPLZPQa8j7CEV2zySSTf2OCWNjgkbCLB57m9pZE6FGo20mJXVWn5THIpghpd6VAqs9VvmmJBo/oZkWdQTOecxFHuwbac6sANXmSA6qnNPbA084+fKdGDiqNsTy8aI5qv2zCzqI+vBjqdAVncCrgZrXZqlpUIwRUDgJePXfqFzpRezZLS7u4memJIxSwWpvtQM6NXcc2m1L+qJrACmf0wZ0nxOeB5yqJBN6HqeUTk0Tvlj2UDYazqnxRP+gquvjV36vl2vHdT+1unTr7hpL58Q5xHARmJzoPo0cbhNaa4Kfw+r4vmcJUhaqsm3MCj0DLtLi0T67OY0rS7D+wMFqLglT0j6IoiRIk="

let config = {
    service_name: "bedrock-runtime",
    region: "us-west-2",
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        sessionToken: AWS_SESSION_TOKEN
    }
}

const client = new BedrockRuntimeClient(config);

async function jurassicApi(prompt) {

    // const prompt = rawPrompt.replace(/(\r\n|\n|\r)/gm, " "); // Replace all types of line breaks with a space


    const input = {
        body: "{\"prompt\":\"" + prompt + "\",\"maxTokens\":8000,\"temperature\":0.9,\"topP\":0.9,\"stopSequences\":[],\"countPenalty\":{\"scale\":0},\"presencePenalty\":{\"scale\":0},\"frequencyPenalty\":{\"scale\":0}}", // required
        contentType: "application/json",
        accept: "application/json",
        modelId: "ai21.j2-ultra-v1",
      };
      const command = new InvokeModelCommand(input);
      const response = await client.send(command);

      const decoder = new TextDecoder('utf-8');
      const jsonString = decoder.decode(new Uint8Array(response.body));
      const parsedBody = JSON.parse(jsonString);
      console.log("console 2" + parsedBody.completions[0].data.text)
      return stableApi(parsedBody.completions[0].data.text);
}

export async function stableApi(rawPrompt) {
    const prompt = rawPrompt.replace(/(\r\n|\n|\r)/gm, " ");
    const input = {
        
        modelId : "stability.stable-diffusion-xl-v1",
        contentType: "application/json",
        accept: "application/json",
        body: "{\"text_prompts\":[{\"text\":\"" + prompt + "\",\"weight\":1}],\"cfg_scale\":10,\"seed\":0,\"steps\":50,\"width\":512,\"height\":512}"
        
      };
      const command = new InvokeModelCommand(input);
      const response = await client.send(command);
      
      const decoder = new TextDecoder('utf-8');
      const jsonString = decoder.decode(new Uint8Array(response.body));
      const parsedBody = JSON.parse(jsonString);
      console.log("console 3" + parsedBody.artifacts[0].base64)
      return parsedBody.artifacts[0].base64
}

export default jurassicApi;