class Network
{
	constructor(neuron)
	{
		this.neuron = neuron;
	}

	lerp(network, factor)
	{
		var neuron = this.neuron.lerp(network.neuron, factor);
		return new Network(neuron);
	}
		
	mutate(mutationFactor)
	{
		this.neuron.mutate(mutationFactor);
	}
	
	clone()
	{
		return new Network(this.neuron.clone());
	}
	
	output(input)
	{
		return this.neuron.output(input);
	}

}