class Layer
{
	constructor(neurons)
	{
		this.neurons = neurons;
	}
	
	lerp(layer, factor)
	{	
		var neurons = [];
		for(var index = 0; index < this.neurons.length; index++)
			neurons.push(this.neurons[index].lerp(layer.neurons[index], factor));
		return new Layer(neurons);
	}
	
	output(inputs)
	{
		var output = [];
		for(var index = 0; index < this.neurons.length; index++)
			output.push(this.neurons[index].output(inputs));
		return output;
	}
	
	mutate(rate, factor)
	{
		this.neurons.forEach(neuron => neuron.mutate(rate, factor));
	}
	
	clone()
	{
		var clonedNeurons = this.neurons.map(neuron => neuron.clone());
		return new Layer(clonedNeurons);
	}
}