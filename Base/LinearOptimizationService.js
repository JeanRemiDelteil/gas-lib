/**********************************************
 * @namespace LinearOptimizationService
 ***********************************************/

/**
 * @class LinearOptimizationService
 */

/**
 * Status of the solver.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status
 */
/**
 * Type of variables created by the solver.
 * 
 * @typedef {LinearOptimizationService.VariableType} LinearOptimizationService.VariableType
 */
/**
 * Creates an engine to to solve linear programs (potentially mixed-integer programs).
 * 
 * <pre class="prettyprint"><code>
 * // Creates a linear optimization engine.
 * var engine = LinearOptimizationService.createEngine();
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * </code></pre>
 * 
 * @function LinearOptimizationService.createEngine
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */



/**
 * @class LinearOptimizationService.LinearOptimizationConstraint
 */

/**
 * Sets the coefficient of a variable in the constraint. By default, variables have a coefficient
 * of 0.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * // Create a linear constraint with the bounds 0 and 10
 * var constraint = engine.addConstraint(0, 10);
 * // Create a variable so we can add it to the constraint
 * engine.addVariable(&#39;x&#39;, 0, 5);
 * // Set the coefficient of the variable in the constraint. The constraint is now:
 * // 0 &lt;= 2 * x &lt;= 5
 * constraint.setCoefficient(&#39;x&#39;, 2);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationConstraint#setCoefficient
 * 
 * @param {String} variableName - the name of variable for which the coefficient is being set
 * @param {Number} coefficient - coefficient being set
 * 
 * @return {LinearOptimizationService.LinearOptimizationConstraint} this linear optimization constraint
 */



/**
 * @class LinearOptimizationService.LinearOptimizationEngine
 */

/**
 * Adds a new linear constraint in the model. The upper and lower bound of the constraint are
 * defined at creation time. Coefficients for the variables are defined via calls to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-constraint.html#setCoefficient(String,Number)'>LinearOptimizationConstraint.setCoefficient(variableName, coefficient)</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Create a linear constraint with the bounds 0 and 10
 * var constraint = engine.addConstraint(0, 10);
 * 
 * // Create a variable so we can add it to the constraint
 * engine.addVariable(&#39;x&#39;, 0, 5);
 * 
 * // Set the coefficient of the variable in the constraint. The constraint is now:
 * // 0 &lt;= 2 * x &lt;= 5
 * constraint.setCoefficient(&#39;x&#39;, 2);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addConstraint
 * 
 * @param {Number} lowerBound - lower bound of the constraint
 * @param {Number} upperBound - upper bound of the constraint
 * 
 * @return {LinearOptimizationService.LinearOptimizationConstraint} the constraint created
 */


/**
 * Adds a new continuous variable to the model. The variable is referenced by its name. The type
 * is set to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html#CONTINUOUS'>VariableType.CONTINUOUS</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * var constraint = engine.addConstraint(0, 10);
 * 
 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER);
 * 
 * // Add a real (continuous) variable. Notice the lack of type specification.
 * engine.addVariable(&#39;y&#39;, 0, 100);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addVariable
 * 
 * @param {String} name - unique name of the variable
 * @param {Number} lowerBound - lower bound of the variable
 * @param {Number} upperBound - upper bound of the variable
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Adds a new variable to the model. The variable is referenced by its name.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * var constraint = engine.addConstraint(0, 10);
 * 
 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER);
 * 
 * // Add a real (continuous) variable
 * engine.addVariable(&#39;y&#39;, 0, 100, LinearOptimizationService.VariableType.CONTINUOUS);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addVariable
 * 
 * @param {String} name - unique name of the variable
 * @param {Number} lowerBound - lower bound of the variable
 * @param {Number} upperBound - upper bound of the variable
 * @param {LinearOptimizationService.VariableType} type - type of the variable, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Adds a new variable to the model. The variable is referenced by its name.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * var constraint = engine.addConstraint(0, 10);
 * 
 * // Add a boolean variable (integer &gt;= 0 and &lt;= 1)
 * engine.addVariable(&#39;x&#39;, 0, 1, LinearOptimizationService.VariableType.INTEGER, 2);
 * // The objective is now 2 * x.
 * 
 * // Add a real (continuous) variable
 * engine.addVariable(&#39;y&#39;, 0, 100, LinearOptimizationService.VariableType.CONTINUOUS, -5);
 * // The objective is now 2 * x - 5 * y.
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addVariable
 * 
 * @param {String} name - unique name of the variable
 * @param {Number} lowerBound - lower bound of the variable
 * @param {Number} upperBound - upper bound of the variable
 * @param {LinearOptimizationService.VariableType} type - type of the variable, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
 * @param {Number} objectiveCoefficient - objective coefficient of the variable
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Sets the optimization direction to maximizing the linear objective function.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add a real (continuous) variable. Notice the lack of type specification.
 * engine.addVariable(&#39;y&#39;, 0, 100);
 * 
 * // Set the coefficient of &#39;y&#39; in the objective.
 * // The objective is now 5 * y
 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
 * 
 * // We want to maximize.
 * engine.setMaximization();
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#setMaximization
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Sets the optimization direction to minimizing the linear objective function.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add a real (continuous) variable. Notice the lack of type specification.
 * engine.addVariable(&#39;y&#39;, 0, 100);
 * 
 * // Set the coefficient of &#39;y&#39; in the objective.
 * // The objective is now 5 * y
 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
 * 
 * // We want to minimize
 * engine.setMinimization();
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#setMinimization
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Sets the coefficient of a variable in the linear objective function.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add a real (continuous) variable. Notice the lack of type specification.
 * engine.addVariable(&#39;y&#39;, 0, 100);
 * 
 * // Set the coefficient of &#39;y&#39; in the objective.
 * // The objective is now 5 * y
 * engine.setObjectiveCoefficient(&#39;y&#39;, 5);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#setObjectiveCoefficient
 * 
 * @param {String} variableName - name of variable for which the coefficient is being set
 * @param {Number} coefficient - coefficient of the variable in the objective function
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Solves the current linear program with the default deadline of 30 seconds. Returns the solution found.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve();
 * if (!solution.isValid()) {
 *   throw &#39;No solution &#39; + solution.getStatus();
 * }
 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#solve
 * 
 * @return {LinearOptimizationService.LinearOptimizationSolution} solution of the optimization
 */


/**
 * Solves the current linear program. Returns the solution found. and if it is an optimal
 * solution.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve(300);
 * if (!solution.isValid()) {
 *   throw &#39;No solution &#39; + solution.getStatus();
 * }
 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#solve
 * 
 * @param {Number} seconds - deadline for solving the problem, in seconds; the maximum deadline is 300 seconds
 * 
 * @return {LinearOptimizationService.LinearOptimizationSolution} solution of the optimization
 */


/**
 * Adds constraints in batch to the model.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add a boolean variable &#39;x&#39; (integer &gt;= 0 and &lt;= 1) and a real (continuous &gt;= 0 and &lt;= 100)
 * variable &#39;y&#39;.
 * engine.addVariables([&#39;x&#39;, &#39;y&#39;], [0, 0], [1, 100],
 *     [LinearOptimizationService.VariableType.INTEGER,
 *         LinearOptimizationService.VariableType.CONTINUOUS]);
 * 
 * // Adds two constraints:
 * //   0 &lt;= x + y &lt;= 3
 * //   1 &lt;= 10 * x - y &lt;= 5
 * engine.addConstraints([0.0, 1.0], [3.0, 5.0], [[&#39;x&#39;, &#39;y&#39;], [&#39;x&#39;, &#39;y&#39;]], [[1, 1], [10, -1]]);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addConstraints
 * 
 * @param {Number[]} lowerBounds - lower bounds of the constraints
 * @param {Number[]} upperBounds - upper bounds of the constraints
 * @param {String[][]} variableNames - the names of variables for which the coefficients are being set
 * @param {Number[][]} coefficients - coefficients being set
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */


/**
 * Adds variables in batch to the model. The variables are referenced by their names.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add a boolean variable &#39;x&#39; (integer &gt;= 0 and &lt;= 1) and a real (continuous &gt;=0 and &lt;= 100)
 * // variable &#39;y&#39;.
 * engine.addVariables([&#39;x&#39;, &#39;y&#39;], [0, 0], [1, 100],
 *     [LinearOptimizationService.VariableType.INTEGER,
 *         LinearOptimizationService.VariableType.CONTINUOUS]);
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationEngine#addVariables
 * 
 * @param {String[]} names - unique names of the variables
 * @param {Number[]} lowerBounds - lower bounds of the variables
 * @param {Number[]} upperBounds - upper bounds of the variables
 * @param {LinearOptimizationService.VariableType[]} types - types of the variables, can be one of <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/variable-type.html'>VariableType</a></code>
 * @param {Number[]} objectiveCoefficients - objective coefficients of the variables
 * 
 * @return {LinearOptimizationService.LinearOptimizationEngine} a linear optimization engine
 */



/**
 * @class LinearOptimizationService.LinearOptimizationSolution
 */

/**
 * Gets the value of the objective function in the current solution.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve();
 * Logger.log(&#39;ObjectiveValue: &#39; + solution.getObjectiveValue());
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationSolution#getObjectiveValue
 * 
 * @return {Number} the value of the objective function
 */


/**
 * Gets the status of the solution. Before solving a problem, the status will be <code>NOT_SOLVED</code>.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve();
 * if (solution.getStatus() != LinearOptimizationService.Status.FEASIBLE &amp;&amp;
 *     solution.getStatus() != LinearOptimizationService.Status.OPTIMAL) {
 *   throw &#39;No solution &#39; + status;
 * }
 * Logger.log(&#39;Status: &#39; + solution.getStatus());
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationSolution#getStatus
 * 
 * @return {LinearOptimizationService.Status} the status of the solver
 */


/**
 * Gets the value of a variable in the solution created by the last call to <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code>.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve();
 * Logger.log(&#39;Value of x: &#39; + solution.getVariableValue(&#39;x&#39;));
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationSolution#getVariableValue
 * 
 * @param {String} variableName - name of the variable
 * 
 * @return {Number} the value of the variable in the solution
 */


/**
 * Determines whether the solution is either feasible or optimal.
 * 
 * <pre class="prettyprint"><code>
 * var engine = LinearOptimizationService.createEngine();
 * 
 * // Add variables, constraints and define the objective with addVariable(), addConstraint(), etc
 * engine.addVariable(&#39;x&#39;, 0, 10);
 * 
 * // ...
 * 
 * // Solve the linear program
 * var solution = engine.solve();
 * if (!solution.isValid()) {
 *   throw &#39;No solution &#39; + status;
 * }
 * </code></pre>
 * 
 * @function LinearOptimizationService.LinearOptimizationSolution#isValid
 * 
 * @return {Boolean} <code>true</code> if the solution is valid (<code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#FEASIBLE'>Status.FEASIBLE</a></code> or
 *     <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/status.html#OPTIMAL'>Status.OPTIMAL</a></code>); <code>false</code> if not
 */



/**
 * @class LinearOptimizationService.Status
 */

/**
 * Status when it failed to find a solution for unexpected reasons.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.ABNORMAL
 */
/**
 * Status when a feasible (not necessarily optimal) solution has been found.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.FEASIBLE
 */
/**
 * Status when the current model is unfeasible (has no solution).
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.INFEASIBLE
 */
/**
 * Status when the model is invalid.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.MODEL_INVALID
 */
/**
 * Status when <code><a target='_blank' href='https://developers.google.com/apps-script/reference/optimization/linear-optimization-engine.html#solve()'>LinearOptimizationEngine.solve()</a></code> has not been called yet.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.NOT_SOLVED
 */
/**
 * Status when an optimal solution has been found.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.OPTIMAL
 */
/**
 * Status when the current model is unbound.
 * 
 * @typedef {LinearOptimizationService.Status} LinearOptimizationService.Status.UNBOUNDED
 */

/**
 * @class LinearOptimizationService.VariableType
 */

/**
 * Type of variable that can take any real value.
 * 
 * @typedef {LinearOptimizationService.VariableType} LinearOptimizationService.VariableType.CONTINUOUS
 */
/**
 * Type of variable that can only take integer values.
 * 
 * @typedef {LinearOptimizationService.VariableType} LinearOptimizationService.VariableType.INTEGER
 */

