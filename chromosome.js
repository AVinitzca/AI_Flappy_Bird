class Chromosome
{
	constructor(network)
	{
		this.network = network;	
	}
	
	evaluate(inputs)
	{
		return this.network.output(inputs);
	}
	
	lerp(chromosome, factor)
	{
		return network.lerp(chromosome.network, factor);
	}
	
	clone()
	{
		return new Chromosome(this.network.clone());
	}
	
	mutate()
	{
		this.network.mutate(Config.mutationFactor);
	}
}