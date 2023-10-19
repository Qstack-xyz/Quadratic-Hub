# Quadratic-Hub
 A Wiki and Mono Repo for all things Quadratic Funding and Voting 
 --
# Quadratic Funding and Voting Hub **SHELL**

An guide on the principles, implementation, and applications of Quadratic Funding and Voting.

## Introduction

Quadratic funding and voting are mechanisms that aim to prioritize community preferences in resource allocation. Inspired by the work of [Glen Weyl](https://glenweyl.com/) and others, this repo serves as a curated resource for understanding and applying these concepts.

## Table of Contents

- [Concepts](./Concepts/)
  - [Introduction](./Concepts/Introduction.md)
  - [Principles](./Concepts/Principles.md)
  - [Advantages](./Concepts/Advantages.md)
  - [Challenges](./Concepts/Challenges.md)
- [Implementation](./Implementation/)
  - [Basics](./Implementation/Basics.md)
  - [Tools and Frameworks](./Implementation/ToolsAndFrameworks.md)
  - [Best Practices](./Implementation/BestPractices.md)
  - [Case Studies](./Implementation/CaseStudies.md)
- [Applications](./Applications/)
  - [Funding](./Applications/Funding.md)
  - [Voting](./Applications/Voting.md)
- [Resources](./Resources/)
  - [Research Papers](./Resources/ResearchPapers.md)
  - [Videos and Talks](./Resources/VideosAndTalks.md)
  - [External Links](./Resources/ExternalLinks.md)
  
## How to Contribute

We welcome all contributions! Please read our [Contribution Guidelines](./Contributions/) before submitting any changes.

# Introduction to Quadratic Funding

Quadratic Funding is a method of funding public goods in proportion to the square root of each individual's contribution. The idea is to optimize funding in a way that it benefits both the individual and the collective. 

It operates under the premise that the societal impact of public goods is typically more than the sum of individual benefits. Therefore, by using a quadratic formula, it becomes less about the amount one can give and more about how many give.

For a detailed mathematical breakdown, refer to the [Implementation](../Implementation/Basics.md) section.

# Principles of Quadratic Funding

1. **Democratic Allocation:** Quadratic funding values the breadth of support over the depth. Projects favored by a broader community receive more funding.
 
2. **Non-linear Matching:** The more contributors, the higher the match, but at a decreasing rate. This prevents whales (large donors) from having disproportionate influence.
  
3. **Optimizing for Public Goods:** Quadratic funding inherently favors projects that benefit a large portion of the community.

# Basics of Quadratic Funding

## Mathematical Breakdown

The fundamental equation behind quadratic funding is:

\[ M = \sum_{i=1}^{n} (\sqrt{c_i})^2 - c_i \]

Where:
- \( M \) is the total matching funds
- \( c_i \) is the contribution of individual \( i \)
- \( n \) is the total number of contributors

For a more detailed explanation and walk-through, refer to the following [research paper](link-to-research-paper).

## Implementation Steps

1. **Gather Contributions:** Collect funds from individual contributors.
2. **Calculate Match:** Use the quadratic formula to determine the match for each project.
3. **Distribute Funds:** Allocate the total funds (individual contributions + match) to each project.

# Research Papers on Quadratic Funding

1. [Quadratic Voting and the Public Good: Introduction](https://link-to-paper1) - This paper introduces the concept and its potential societal impact.
2. [Optimizing Quadratic Funding: Challenges and Solutions](https://link-to-paper2) - Delves into the nuances of implementation and potential pitfalls.
3. [Case Study: Quadratic Funding in Open Source](https://link-to-paper3) - A real-world application of quadratic funding in the open-source ecosystem.
