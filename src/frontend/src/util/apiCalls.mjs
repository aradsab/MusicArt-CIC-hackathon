import { BedrockRuntimeClient, InvokeModelCommand} from '@aws-sdk/client-bedrock-runtime'
import axios from 'axios'


const AWS_DEFAULT_REGION = "us-west-2"
const AWS_ACCESS_KEY_ID = "ASIA42BKWTM3NI4IX67R"
const AWS_SECRET_ACCESS_KEY = "D2qjI5ACfruGItiPlS591uKpB46pl+GE6/SPRfTr"
const AWS_SESSION_TOKEN = "IQoJb3JpZ2luX2VjEFMaCXVzLWVhc3QtMSJHMEUCIDz6IYGeVmGnwaiSf+8hLjFWcHMk0teqSoshTJ3wX445AiEArPEvp2if7/diLq8vtJTeitL771NWlII7W023PuQXIoEqmQIITBACGgw4ODA1NTc4NTc1OTAiDCqGN5EvUGd6STmWtCr2AbSSMZTusmt4nQk4gWAQZEu1C+XEvDBf33Hvo2THjiHEt9eZg/XdTpzvdXzu7jkdWQaKqlQBxqv/ZIWGq7wM9LyWrBmpixGE1yvhE0kgbDNsMumndL3DRro4fTmQ0LFYql5xA/kYDa1ZUlF0J3wWnn3sfRDj3B0HDrmcu8JRvfDnHcaXvFqt4GFucaWkdMUj6isxXMrV6EQzGTgZ8q0JhMY93tCE8BSARM5OFqxfs4jg9JMhXho5y32Y5b8cZA1i0os9WyZn0desH1PUSYymPA6GslTcTLoDu0NyZCAU/aT9TU4OnLo0Jw9T4b5srMjY0ia8/wZXnzCo5o2vBjqdAfGVrX5oOd3rQxsDEbPb3oNmo93WG02qSVRifzaiBidlHgmSqxxTeeto69kuqKHPSdrxUPUl4HXZ5fZ2PYd2vwpHvGRv8Bqo6OY0IOWopqR9viLsIo89QqwgJrnQvVXOVypLdy2IfmF8UnOAvMtStgCqju9dLqT1LvZ6Xb2Wuuv20jGNV7cDhwuUMPPv0BBjm/7Y2VTRBmkZAg74qTM="

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

    const input = {
        body: "{\"prompt\":\"" + prompt + "\",\"maxTokens\":400,\"temperature\":0.9,\"topP\":0.9,\"stopSequences\":[],\"countPenalty\":{\"scale\":0},\"presencePenalty\":{\"scale\":0},\"frequencyPenalty\":{\"scale\":0}}", // required
        contentType: "application/json",
        accept: "application/json",
        modelId: "ai21.j2-ultra-v1",
      };
      const command = new InvokeModelCommand(input);
      const response = await client.send(command);
      console.log(response)
}

async function stableApi(prompt) {
    const input = {
        
        modelId : "stability.stable-diffusion-xl-v1",
        contentType: "application/json",
        accept: "application/json",
        body: "{\"text_prompts\":[{\"text\":\"" + prompt + "\",\"weight\":1}],\"cfg_scale\":10,\"seed\":0,\"steps\":50,\"width\":512,\"height\":512}"
        
      };
      const command = new InvokeModelCommand(input);
      const response = await client.send(command);
      console.log(response.body)
}



stableApi('Dragon')