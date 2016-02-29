#load "./lib/Fable.Core.fs"

open Fable.Core

type Point =
    { X: int
      Y: int }

let x = { X = 100; Y = 200 }
match x with
| { X = 10 } -> printfn "X=100"
| _ -> printfn "%A" x