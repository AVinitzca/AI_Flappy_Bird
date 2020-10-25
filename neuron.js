


class Neuron
{
	constructor(weights)
	{
		this.weights = weights;
	}
	
	lerp(neuron, factor)
	{
		var weights = [];
		for(var index = 0; index < this.weights.length; index++)
			weights.push(lerp(this.weights[index], neuron.weights[index], factor));
		return new Neuron(weights);
	}

	
	mutate(mutationFactor)
	{
		this.weights = this.weights.map((weight) => weight += (Math.random() * 2.0 - 1.0) * mutationFactor);
	}
	
	output(inputs)
	{
		var output = 0;
		for(var index = 0; index < inputs.length; index++)
			output += this.weights[index] * inputs[index];
		return output;
	}
	
	clone()
	{
		return new Neuron([...this.weights]);
	}
	
}

function lerp(v0, v1, t) 
{
    return v0*(1-t)+v1*t
}