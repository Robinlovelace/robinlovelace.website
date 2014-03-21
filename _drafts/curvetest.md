---
layout: post
title: Curve fitting with R's nls function
categories:
- R
tags:
- R
- modelling
- software
---
This tutorial on general curve fitting is taken from 
a technical note entitled "Curve fitting with the R Environment for Statistical
Computing" (Rossiter, 2009). It focuses on the `nls` function,
which stands for 'Nonlinear Least Squares', and its use to 
find parameter values for non-linear functions.

Much of the information about this function is actually available 
from within R. Running `?nls`, for example, will result in a large
amount of text being displayed, beginning with the following:

```
nls {stats}  R Documentation
Nonlinear Least Squares

Description

Determine the nonlinear (weighted) least-squares estimates of the parameters of a nonlinear model.

Usage

nls(formula, data, start, control, algorithm,
trace, subset, weights, na.action, model,lower, upper, ...)
```
This and the help text that follows is very terse and 
may be difficult for new R
users to figure out exactly what is going on. This demo
is designed to add flesh to this terse documentation 
with more wordy explanation and couple of examples.

## Basic curve fitting 


```r
len <- 24
x = runif(len)
y = x^3 + runif(len, min = -0.1, max = 0.1)
plot(x, y)
s <- seq(from = 0, to = 1, length = 50)
lines(s, s^3, lty = 2)

df <- data.frame(x, y)
m <- nls(y ~ I(x^power), data = df, start = list(power = 1), trace = T)
```

```
## 1.928 :  1
## 0.2939 :  1.948
## 0.0774 :  2.634
## 0.06892 :  2.829
## 0.06888 :  2.844
## 0.06888 :  2.844
## 0.06888 :  2.844
```

```r
lines(s, predict(m, list(x = s)), col = "green")
```

![plot of chunk unnamed-chunk-1](figure/unnamed-chunk-1.png) 

```r
summary(m)
```

```
## 
## Formula: y ~ I(x^power)
## 
## Parameters:
##       Estimate Std. Error t value Pr(>|t|)    
## power     2.84       0.13    21.9   <2e-16 ***
## ---
## Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1
## 
## Residual standard error: 0.0547 on 23 degrees of freedom
## 
## Number of iterations to convergence: 6 
## Achieved convergence tolerance: 3.23e-07
```

The penulitimate line of code shows how the nls function is used to 
optimise given functions to fit available data. In this case 
the functional form is set as  $y = x^{power}$ where $power$ is 
a coefficent whose value is to be found. The equation is placed within 
the I() function to ensure that `power` is interpreted as a variable, 
and not converted into a character string. Later, the meaning of 
`power` becomes clear as its initial value is set to one: 
its value is to be altered iteratively until it converges to the 
optimal solution. Any character string could be used in place of `power`:



### Calculating the R-squared value - a measure of fit.
Note: assignments placed in brackets so value is printed.


```r
(RSS.p <- sum(residuals(m)^2))  # Residual sum of squares
```

```
## [1] 0.06888
```

```r
(TSS <- sum((y - mean(y))^2))  # Total sum of squares
```

```
## [1] 2.09
```

```r
1 - (RSS.p/TSS)  # R-squared measure
```

```
## [1] 0.967
```


## Fitting to an exponential curve
Let's redefine the model m such that it is exponential, and re-plot the results:

```r
m.exp <- nls(y ~ I(a * exp(b * x)), data = df, start = list(a = 1, b = 0), trace = T)
```

```
## 14.93 :  1 0
## 2.535 :  0.3774 0.4923
## 1.181 :  0.09793 1.41136
## 0.8628 :  0.05417 2.21523
## 0.7873 :  0.01882 3.41610
## 0.2822 :  0.0196 4.2409
## 0.07793 :  0.02184 3.90708
## 0.07707 :  0.02218 3.87362
## 0.07707 :  0.02214 3.87581
## 0.07707 :  0.02214 3.87564
## 0.07707 :  0.02214 3.87566
```

```r

plot(x, y)
lines(s, s^3, lty = 2)
lines(s, predict(m, list(x = s)), col = "green")
lines(s, predict(m.exp, list(x = s)), col = "red")
```

![plot of chunk unnamed-chunk-3](figure/unnamed-chunk-3.png) 

From the above, we can see that an exponential function, with the form
$y = \alpha e^{\beta x}$ also fits the data well, although the curve seems
too steep towards the right hand side of the graph. 

To test whether or not this model better fits the data, we can 
re-run the R-squared test:

```r
(RSS.p <- sum(residuals(m.exp)^2))  # Residual sum of squares
```

```
## [1] 0.07707
```

```r
(TSS <- sum((y - mean(y))^2))  # Total sum of squares
```

```
## [1] 2.09
```

```r
1 - (RSS.p/TSS)  # R-squared measure
```

```
## [1] 0.9631
```

It is clear that the exponential curve fits te data less well.

## Fitting the data to a pre-defined function
We can use the nls function to iteratively alter any number
of coefficients in any function we care to use. 
Let's assume briefly that the relationship `y ~ x` is 
not actually cubic but exponential, with the following form: 
$$y = e^{a + b sin(x)}$$
The function can be defined using the generic method.


```r
exp.eq <- function(x, a, b) {
    exp(1)^(a + b * sin(x^4))
}
exp.eq(2, 1, 3)  # testing the equation works: 3^2 + 1 = 10
```

```
## [1] 1.146
```

Now that this functional form has been defined, nls can be used 
to find the coefficients which best reflect the data:


```r
m.sinexp <- nls(y ~ exp.eq(x, a, b), data = df, start = list(a = 1, b = 1), 
    trace = T)
```

```
## 247 :  1 1
## 29.36 :  0.03487 1.17194
## 3.026 :  -0.8671  1.5437
## 0.4251 :  -1.595  2.110
## 0.2796 :  -1.959  2.501
## 0.2785 :  -1.997  2.536
## 0.2785 :  -1.994  2.532
## 0.2785 :  -1.995  2.532
## 0.2785 :  -1.995  2.532
## 0.2785 :  -1.995  2.532
```

```r

plot(x, y)
lines(s, s^3, lty = 2)
lines(s, predict(m, list(x = s)), col = "green")
lines(s, predict(m.exp, list(x = s)), col = "red")
lines(s, predict(m.sinexp, list(x = s)), col = "blue")
```

![plot of chunk unnamed-chunk-6](figure/unnamed-chunk-6.png) 

Clearly the final exponential function was silly, and did not fit the 
data well at all. Nevertheless, it showed us how we can use the 
nls function to fit our pre-defined functions to existing data.
