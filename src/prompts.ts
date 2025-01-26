import * as p from '@clack/prompts'

export async function main(services: string[]) {
    const serviceName = await p.select({
        message: "Which service should be modified?",
        options: services.map((service) => ({ value: service, label: service })),
    })
    const domainName = await p.text({
        message: 'What domain name to set this service?',
        placeholder: 'awesome-app.example.com',
        validate(input) {
          if (input.length === 0) {
            return 'Please enter a valid domain name'
          }   
        },
    })
    const imageName = await p.text({
        message: 'What image to set this service?',
        placeholder: 'awesome-app',
        validate(input) {
          if (input.length === 0) {

            return 'Please enter a valid image name'
          }   
        },
    })
}

// main(['service1', 'service2'])

if (false) {
    main(['service1', 'service2'])
}
