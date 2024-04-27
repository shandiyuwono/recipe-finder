'use client'
import Image from "next/image"; 
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

const test = {
  "data": {
      "from": 1,
      "to": 20,
      "count": 10000,
      "_links": {
          "next": {
              "href": "https://api.edamam.com/api/recipes/v2?q=beef&app_key=f75d3a748df11d9c9594fd9c2f7a2951&_cont=CHcVQBtNNQphDmgVQntAEX4BYUtyAgcCQ2BHCmcRYlF3AwEVX3dEBGAaYlByB1cGFWFEBTNGMlF3UQcFEmcRBzBBYAR1UBFqX3cWQT1OcV9xBE4%3D&type=public&app_id=dfec72b2",
              "title": "Next page"
          }
      },
      "hits": [
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_878a91ab0fdb45f2b2642dec11290c9d",
                  "label": "Smoked Wagyu Beef Shank",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d96/d964289a83afcc99c8022addf088444d.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a75ce3da951780f6f8389ef79a2c98994a69d9c6e27826d3925b8f12c8da04e8",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d96/d964289a83afcc99c8022addf088444d-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=340d5394d55c66d735ce38ad5f16dfe543db7fe4540a146fe268ae236d99a704",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d96/d964289a83afcc99c8022addf088444d-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3607e85e8aea630a201e38272450d29147b295ea25c2f94d9269d5482795f37b",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d96/d964289a83afcc99c8022addf088444d.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a75ce3da951780f6f8389ef79a2c98994a69d9c6e27826d3925b8f12c8da04e8",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d96/d964289a83afcc99c8022addf088444d-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ecb7afc723da801271bbd1229978d66ed2828c8fd30b08bf4fb55c030494319f",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Food52",
                  "url": "https://food52.com/recipes/86509-smoked-wagyu-beef-shank",
                  "shareAs": "http://www.edamam.com/recipe/smoked-wagyu-beef-shank-878a91ab0fdb45f2b2642dec11290c9d/beef",
                  "yield": 8,
                  "dietLabels": [
                      "Low-Carb",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Low Sugar",
                      "Keto-Friendly",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "1 (6-7 LB) Double 8 Cattle Company Fullblood Wagyu Whole Beef Shank",
                      "2 cups Beef Tallow (substitutes: beef broth or red wine)",
                      "3/4 cup Beef Tallow (substitutes: beef broth or red wine)"
                  ],
                  "ingredients": [
                      {
                          "text": "1 (6-7 LB) Double 8 Cattle Company Fullblood Wagyu Whole Beef Shank",
                          "quantity": 6.5,
                          "measure": "pound",
                          "food": "Beef Shank",
                          "weight": 2948.350405,
                          "foodCategory": "meats",
                          "foodId": "food_a5df8fkb08nkskaatgb0hagygc19",
                          "image": "https://www.edamam.com/food-img/769/7693944597853171e289e9e6760e26dc.jpg"
                      },
                      {
                          "text": "2 cups Beef Tallow (substitutes: beef broth or red wine)",
                          "quantity": 2,
                          "measure": "cup",
                          "food": "Beef Tallow",
                          "weight": 410,
                          "foodCategory": "Oils",
                          "foodId": "food_bq6j8w4b6wwaefaxgj54bb5sciko",
                          "image": "https://www.edamam.com/food-img/870/870f5cbd68a751fae5e5f829b2464f23.jpg"
                      },
                      {
                          "text": "3/4 cup Beef Tallow (substitutes: beef broth or red wine)",
                          "quantity": 0.75,
                          "measure": "cup",
                          "food": "Beef Tallow",
                          "weight": 153.75,
                          "foodCategory": "Oils",
                          "foodId": "food_bq6j8w4b6wwaefaxgj54bb5sciko",
                          "image": "https://www.edamam.com/food-img/870/870f5cbd68a751fae5e5f829b2464f23.jpg"
                      }
                  ],
                  "calories": 7349.35811104,
                  "totalCO2Emissions": 154261.91848649998,
                  "co2EmissionsClass": "G",
                  "totalWeight": 3512.100405,
                  "totalTime": 1200,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 7349.35811104,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 631.8568943554999,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 303.3908311104,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 266.78208027679995,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 25.2035153645,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 385.644232974,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1304.40149477,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 1114.47645309,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 353.8020486,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 247.66143402,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 6846.06964041,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 41.0410376376,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 122.76931086420001,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 3608.78089572,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.769010243,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 3.8918225345999997,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 101.5411879482,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 8.3143481421,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 141.52081944,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 141.52081944,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 58.9080410919,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 3.9462499999999996,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 15.221250000000001,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1291.37747739,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 367.467905552,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 972.0875297776921,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 1516.9541555519997,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 771.288465948,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 434.8004982566667,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 46.43651887875,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 35.38020486,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 58.9670081,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 145.66105617893618,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 228.00576465333336,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 1116.0846442200002,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 515.5401279600001,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 147.41752025000002,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 299.37096419999995,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 634.63242467625,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 639.5652417,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 35.38020486,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 2454.5017121625,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 26.30833333333333,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 101.47500000000001,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 0,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 631.8568943554999,
                          "hasRDI": true,
                          "daily": 972.0875297776921,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 303.3908311104,
                                  "hasRDI": true,
                                  "daily": 1516.9541555519997,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 266.78208027679995,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 25.2035153645,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 385.644232974,
                          "hasRDI": true,
                          "daily": 771.288465948,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1304.40149477,
                          "hasRDI": true,
                          "daily": 434.8004982566667,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 1114.47645309,
                          "hasRDI": true,
                          "daily": 46.43651887875,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 353.8020486,
                          "hasRDI": true,
                          "daily": 35.38020486,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 247.66143402,
                          "hasRDI": true,
                          "daily": 58.9670081,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 6846.06964041,
                          "hasRDI": true,
                          "daily": 145.66105617893618,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 41.0410376376,
                          "hasRDI": true,
                          "daily": 228.00576465333336,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 122.76931086420001,
                          "hasRDI": true,
                          "daily": 1116.0846442200002,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 3608.78089572,
                          "hasRDI": true,
                          "daily": 515.5401279600001,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.769010243,
                          "hasRDI": true,
                          "daily": 147.41752025000002,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 3.8918225345999997,
                          "hasRDI": true,
                          "daily": 299.37096419999995,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 101.5411879482,
                          "hasRDI": true,
                          "daily": 634.63242467625,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 8.3143481421,
                          "hasRDI": true,
                          "daily": 639.5652417,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 141.52081944,
                          "hasRDI": true,
                          "daily": 35.38020486,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 141.52081944,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 58.9080410919,
                          "hasRDI": true,
                          "daily": 2454.5017121625,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 3.9462499999999996,
                          "hasRDI": true,
                          "daily": 26.30833333333333,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 15.221250000000001,
                          "hasRDI": true,
                          "daily": 101.47500000000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1291.37747739,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/878a91ab0fdb45f2b2642dec11290c9d?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_875fd10f772d4a299d47af056ff3dd44",
                  "label": "Roast Beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ac6/ac62c888656327623f1bf247638ca34b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a6415ac16b50bce95cb3e21fd58164b9492d8ceb64b49d9ff0e1ae6cfd76e4d6",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ac6/ac62c888656327623f1bf247638ca34b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c7b873790fc3bffb86f462668d016b5a0b0aca2bc530156a313fb19708c531a5",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ac6/ac62c888656327623f1bf247638ca34b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=063fae044bc854a78e4db4062dad39bf0a4be54a83dd7004247aa04efc25c408",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ac6/ac62c888656327623f1bf247638ca34b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a6415ac16b50bce95cb3e21fd58164b9492d8ceb64b49d9ff0e1ae6cfd76e4d6",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ac6/ac62c888656327623f1bf247638ca34b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70e6e2c2163e014d949629db9e1a89097cdbeb80f55a36624e762673f7a450cd",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Saveur",
                  "url": "https://www.saveur.com/recipes/roast-beef-recipe",
                  "shareAs": "http://www.edamam.com/recipe/roast-beef-875fd10f772d4a299d47af056ff3dd44/beef",
                  "yield": 10,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "FODMAP-Free",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "1 boneless beef shell roast (8 lb.)",
                      "Kosher salt and freshly ground black pepper"
                  ],
                  "ingredients": [
                      {
                          "text": "1 boneless beef shell roast (8 lb.)",
                          "quantity": 8,
                          "measure": "pound",
                          "food": "beef",
                          "weight": 3628.73896,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "Kosher salt and freshly ground black pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "Kosher salt",
                          "weight": 21.772433760000002,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "Kosher salt and freshly ground black pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "black pepper",
                          "weight": 10.886216880000001,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      }
                  ],
                  "calories": 4744.685052368801,
                  "totalCO2Emissions": 361042.8568189656,
                  "co2EmissionsClass": "G",
                  "totalWeight": 3654.045265886585,
                  "totalTime": 120,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 4744.685052368801,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 174.89723464628804,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 72.36322371863201,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 9.071847400000001,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 91.1617970387432,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 11.357735220462398,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 11.3216655552,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 8.567452684560001,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 2.7542128706400004,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0.06967178803200001,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 784.9397819155201,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 2286.1055448,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 8463.875556330904,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 523.4228269399805,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 780.7948133548659,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 13681.136612424529,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 76.94528221676974,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 196.4587438058786,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 7891.563765870401,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 75.51405775760001,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 2.9147482822304003,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 6.188451422384001,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 177.569438016432,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 20.642916183920804,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 110.71282566960001,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 110.71282566960001,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 82.37237439200001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 3.6287389600000006,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 6.644946783552,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 72.28448008320001,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 2624.9678853680134,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 237.23425261844005,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 269.072668686597,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 361.81611859316007,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.7738885183999997,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 11.016851482560003,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 1569.8795638310403,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 762.0351816000001,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 352.6614815137877,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 52.34228269399805,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 185.90352698925378,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 291.0880130303091,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 427.47379009316523,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 1785.988580053442,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 1127.3662522672003,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 8.390450861955557,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 242.89569018586673,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 476.03472479876933,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 1109.8089876027,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1587.9166295323694,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 27.678206417400002,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 3432.182266333334,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 24.19159306666667,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 44.29964522368,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 60.237066736,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 174.89723464628804,
                          "hasRDI": true,
                          "daily": 269.072668686597,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 72.36322371863201,
                                  "hasRDI": true,
                                  "daily": 361.81611859316007,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 9.071847400000001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 91.1617970387432,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 11.357735220462398,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 11.3216655552,
                          "hasRDI": true,
                          "daily": 3.7738885183999997,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 8.567452684560001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 2.7542128706400004,
                                  "hasRDI": true,
                                  "daily": 11.016851482560003,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0.06967178803200001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 784.9397819155201,
                          "hasRDI": true,
                          "daily": 1569.8795638310403,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 2286.1055448,
                          "hasRDI": true,
                          "daily": 762.0351816000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 8463.875556330904,
                          "hasRDI": true,
                          "daily": 352.6614815137877,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 523.4228269399805,
                          "hasRDI": true,
                          "daily": 52.34228269399805,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 780.7948133548659,
                          "hasRDI": true,
                          "daily": 185.90352698925378,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 13681.136612424529,
                          "hasRDI": true,
                          "daily": 291.0880130303091,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 76.94528221676974,
                          "hasRDI": true,
                          "daily": 427.47379009316523,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 196.4587438058786,
                          "hasRDI": true,
                          "daily": 1785.988580053442,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 7891.563765870401,
                          "hasRDI": true,
                          "daily": 1127.3662522672003,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 75.51405775760001,
                          "hasRDI": true,
                          "daily": 8.390450861955557,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 2.9147482822304003,
                          "hasRDI": true,
                          "daily": 242.89569018586673,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 6.188451422384001,
                          "hasRDI": true,
                          "daily": 476.03472479876933,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 177.569438016432,
                          "hasRDI": true,
                          "daily": 1109.8089876027,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 20.642916183920804,
                          "hasRDI": true,
                          "daily": 1587.9166295323694,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 110.71282566960001,
                          "hasRDI": true,
                          "daily": 27.678206417400002,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 110.71282566960001,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 82.37237439200001,
                          "hasRDI": true,
                          "daily": 3432.182266333334,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 3.6287389600000006,
                          "hasRDI": true,
                          "daily": 24.19159306666667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 6.644946783552,
                          "hasRDI": true,
                          "daily": 44.29964522368,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 72.28448008320001,
                          "hasRDI": true,
                          "daily": 60.237066736,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 2624.9678853680134,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/875fd10f772d4a299d47af056ff3dd44?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7eb3edfc916ebf0e4b028c8e5c04b81a",
                  "label": "Roast sirloin of beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4fae8437c3f6e2ae2e30dee8f142a6c6dbae6663ec610e8e3ecac688f51a7b2",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aa5185b1008efbd8ae1463fbac7ef95a183b55e229fb1b8c8f46a5ba73585a46",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=462face8f3f7792cf3cd53409b54d3d65dda66448876418b2e26d79970928d8d",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a4fae8437c3f6e2ae2e30dee8f142a6c6dbae6663ec610e8e3ecac688f51a7b2",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "http://www.bbcgoodfood.com/recipes/2558/roast-sirloin-of-beef",
                  "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-7eb3edfc916ebf0e4b028c8e5c04b81a/beef",
                  "yield": 6,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Kosher"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "2 tbsp vegetable oil or beef fat",
                      "1-1½kg/2lb 4-3lb 5oz sirloin of beef joint",
                      "1 glass red wine",
                      "400g can beef consommé"
                  ],
                  "ingredients": [
                      {
                          "text": "2 tbsp vegetable oil or beef fat",
                          "quantity": 2,
                          "measure": "tablespoon",
                          "food": "vegetable oil",
                          "weight": 28,
                          "foodCategory": "Oils",
                          "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                          "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                      },
                      {
                          "text": "1-1½kg/2lb 4-3lb 5oz sirloin of beef joint",
                          "quantity": 1.25,
                          "measure": "kilogram",
                          "food": "beef",
                          "weight": 1250,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "1 glass red wine",
                          "quantity": 1,
                          "measure": "cup",
                          "food": "red wine",
                          "weight": 235.2,
                          "foodCategory": "wines",
                          "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
                          "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
                      },
                      {
                          "text": "400g can beef consommé",
                          "quantity": 400,
                          "measure": "gram",
                          "food": "beef consommé",
                          "weight": 400,
                          "foodCategory": "canned soup",
                          "foodId": "food_arlagstbtxcrk4ablvuh9b36no9m",
                          "image": "https://www.edamam.com/food-img/6a5/6a5f7cf073a7e70af946bfb4d558a914.jpg"
                      }
                  ],
                  "calories": 2120.44,
                  "totalCO2Emissions": 164681.99973647762,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1913.2,
                  "totalTime": 160,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2120.44,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 88.125,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 26.6978,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 3.33976,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 51.535,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 8.663,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 10.55872,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 10.55872,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 1.45824,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 279.04464,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 787.5,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 2052.908,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 197.31600000000003,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 290.724,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 5217.204,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 28.08692,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 68.55427999999999,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 2818.596,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 25,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.6,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.04776,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 2.245912,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 62.831847999999994,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 7.274064000000001,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 43.852,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 43.852,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 28.375,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 1.25,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 8.354000000000001,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 19.6908,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1491.9979999999998,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 106.022,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 135.57692307692307,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 133.489,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.5195733333333328,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 558.08928,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 262.5,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 85.53783333333332,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 19.731600000000004,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 69.22,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 111.00434042553191,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 156.03844444444445,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 623.2207272727272,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 402.6565714285714,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 2.7777777777777777,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.7777777777777777,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 87.31333333333333,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 172.76246153846154,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 392.69904999999994,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 559.5433846153846,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 10.963,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1182.2916666666667,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 8.333333333333334,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 55.69333333333334,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 16.409,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 88.125,
                          "hasRDI": true,
                          "daily": 135.57692307692307,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 26.6978,
                                  "hasRDI": true,
                                  "daily": 133.489,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 3.33976,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 51.535,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 8.663,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 10.55872,
                          "hasRDI": true,
                          "daily": 3.5195733333333328,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 10.55872,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 1.45824,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 279.04464,
                          "hasRDI": true,
                          "daily": 558.08928,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 787.5,
                          "hasRDI": true,
                          "daily": 262.5,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 2052.908,
                          "hasRDI": true,
                          "daily": 85.53783333333332,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 197.31600000000003,
                          "hasRDI": true,
                          "daily": 19.731600000000004,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 290.724,
                          "hasRDI": true,
                          "daily": 69.22,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 5217.204,
                          "hasRDI": true,
                          "daily": 111.00434042553191,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 28.08692,
                          "hasRDI": true,
                          "daily": 156.03844444444445,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 68.55427999999999,
                          "hasRDI": true,
                          "daily": 623.2207272727272,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 2818.596,
                          "hasRDI": true,
                          "daily": 402.6565714285714,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 25,
                          "hasRDI": true,
                          "daily": 2.7777777777777777,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 1.6,
                          "hasRDI": true,
                          "daily": 1.7777777777777777,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.04776,
                          "hasRDI": true,
                          "daily": 87.31333333333333,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 2.245912,
                          "hasRDI": true,
                          "daily": 172.76246153846154,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 62.831847999999994,
                          "hasRDI": true,
                          "daily": 392.69904999999994,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 7.274064000000001,
                          "hasRDI": true,
                          "daily": 559.5433846153846,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 43.852,
                          "hasRDI": true,
                          "daily": 10.963,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 43.852,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 28.375,
                          "hasRDI": true,
                          "daily": 1182.2916666666667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 1.25,
                          "hasRDI": true,
                          "daily": 8.333333333333334,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 8.354000000000001,
                          "hasRDI": true,
                          "daily": 55.69333333333334,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 19.6908,
                          "hasRDI": true,
                          "daily": 16.409,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1491.9979999999998,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/7eb3edfc916ebf0e4b028c8e5c04b81a?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0f3a359371750f372c7ac3c1459751d9",
                  "label": "Beef Tea",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/fdb/fdbf70c97bdfb86dc33e2dbab97dd847.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a71c01db485c42feafcf7683e2f80eaf76df1d1ec3a2641281f24d6833d4e210",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fdb/fdbf70c97bdfb86dc33e2dbab97dd847-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=39bb68042ca74cc59471265b1498e1c70f943d6f70dc5e6572b0b961afed0390",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fdb/fdbf70c97bdfb86dc33e2dbab97dd847-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f0824f3ff3b41572025ff61596373f03671c536a900eac8a4a7e767356c8809",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fdb/fdbf70c97bdfb86dc33e2dbab97dd847.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a71c01db485c42feafcf7683e2f80eaf76df1d1ec3a2641281f24d6833d4e210",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/fdb/fdbf70c97bdfb86dc33e2dbab97dd847-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=849e1f64837100fd6559eec63107a4c62bd94ca639c3530408a5b2a5c4fc8360",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Epicurious",
                  "url": "https://www.epicurious.com/recipes/food/views/beef-tea-395253",
                  "shareAs": "http://www.edamam.com/recipe/beef-tea-0f3a359371750f372c7ac3c1459751d9/beef",
                  "yield": 2,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Low Sugar",
                      "Keto-Friendly",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "FODMAP-Free",
                      "Kosher"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "8 ounces beef chuck steak, cut into 1/2-inch cubes",
                      "1/4 teaspoon salt",
                      "3 cups water"
                  ],
                  "ingredients": [
                      {
                          "text": "8 ounces beef chuck steak, cut into 1/2-inch cubes",
                          "quantity": 8,
                          "measure": "ounce",
                          "food": "chuck steak",
                          "weight": 226.796185,
                          "foodCategory": "meats",
                          "foodId": "food_axxyoglauthkj2bzoyuueb6eb3bh",
                          "image": "https://www.edamam.com/food-img/e53/e53f909f06b1a44972b9492a7604beee.jpg"
                      },
                      {
                          "text": "1/4 teaspoon salt",
                          "quantity": 0.25,
                          "measure": "teaspoon",
                          "food": "salt",
                          "weight": 1.5,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "3 cups water",
                          "quantity": 3,
                          "measure": "cup",
                          "food": "water",
                          "weight": 709.7647095,
                          "foodCategory": "water",
                          "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                          "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      }
                  ],
                  "calories": 514.82733995,
                  "totalCO2Emissions": 22562.4794838,
                  "co2EmissionsClass": "G",
                  "totalWeight": 938.0608945,
                  "totalTime": 0,
                  "cuisineType": [
                      "mediterranean"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "soup"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 514.82733995,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 38.10175908000001,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 16.283966083000003,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 2.4040395610000003,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 18.098335563000003,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 1.4741752025000003,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 42.864478965,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 154.2214058,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 760.0760704800001,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 53.40440718500001,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 50.20392224500001,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 748.5474105000001,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 4.767669885000001,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 16.62859797595,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 405.96517115000006,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 9.071847400000001,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.15875732950000004,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.31978262085000003,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 9.842954429,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 0.7393555631000002,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 6.80388555,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 6.80388555,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 6.214215469000001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0.22679618500000004,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 0.34019427750000003,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 3.401942775,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 854.2075031905,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 25.741366997500002,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 58.6180908923077,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 81.419830415,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 85.72895793000002,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 51.40713526666667,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 31.66983627,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 5.340440718500001,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 11.953314820238099,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 15.926540648936173,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 26.487054916666672,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 151.1690725086364,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 57.99502445000002,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 1.0079830444444446,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 13.229777458333338,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 24.598663142307696,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 61.51846518125,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 56.87350485384616,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 1.7009713875,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 258.9256445416667,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 1.5119745666666669,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 2.2679618500000003,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 2.8349523125,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 38.10175908000001,
                          "hasRDI": true,
                          "daily": 58.6180908923077,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 16.283966083000003,
                                  "hasRDI": true,
                                  "daily": 81.419830415,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 2.4040395610000003,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 18.098335563000003,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 1.4741752025000003,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 42.864478965,
                          "hasRDI": true,
                          "daily": 85.72895793000002,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 154.2214058,
                          "hasRDI": true,
                          "daily": 51.40713526666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 760.0760704800001,
                          "hasRDI": true,
                          "daily": 31.66983627,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 53.40440718500001,
                          "hasRDI": true,
                          "daily": 5.340440718500001,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 50.20392224500001,
                          "hasRDI": true,
                          "daily": 11.953314820238099,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 748.5474105000001,
                          "hasRDI": true,
                          "daily": 15.926540648936173,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 4.767669885000001,
                          "hasRDI": true,
                          "daily": 26.487054916666672,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 16.62859797595,
                          "hasRDI": true,
                          "daily": 151.1690725086364,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 405.96517115000006,
                          "hasRDI": true,
                          "daily": 57.99502445000002,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 9.071847400000001,
                          "hasRDI": true,
                          "daily": 1.0079830444444446,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.15875732950000004,
                          "hasRDI": true,
                          "daily": 13.229777458333338,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 0.31978262085000003,
                          "hasRDI": true,
                          "daily": 24.598663142307696,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 9.842954429,
                          "hasRDI": true,
                          "daily": 61.51846518125,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 0.7393555631000002,
                          "hasRDI": true,
                          "daily": 56.87350485384616,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 6.80388555,
                          "hasRDI": true,
                          "daily": 1.7009713875,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 6.80388555,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 6.214215469000001,
                          "hasRDI": true,
                          "daily": 258.9256445416667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0.22679618500000004,
                          "hasRDI": true,
                          "daily": 1.5119745666666669,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 0.34019427750000003,
                          "hasRDI": true,
                          "daily": 2.2679618500000003,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 3.401942775,
                          "hasRDI": true,
                          "daily": 2.8349523125,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 854.2075031905,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/0f3a359371750f372c7ac3c1459751d9?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_710678b0fae9d4fa004975ef91aae1a3",
                  "label": "Beef Brisket",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f897163c4706e105309ec6906a609ad48ef3d61c09fefed9faf26620da9d5e3",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ca4b8ec9115a567508ac12e4153511f46c93eadb04035078b10f5a0d26cd7b1",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cca98b4d3dc026e73d571c04c76d0c008835aaa61bfabfe98ba18fe952058ca8",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3f897163c4706e105309ec6906a609ad48ef3d61c09fefed9faf26620da9d5e3",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/deb/debce0693c8d8a6988af80e1f94e4c4c-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=060595f2f111ddd0935c8d3bae656cf6ed6cb02b32867ca0dc7cd14769c77f0f",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Simply Recipes",
                  "url": "http://simplyrecipes.com/recipes/beef_brisket/",
                  "shareAs": "http://www.edamam.com/recipe/beef-brisket-710678b0fae9d4fa004975ef91aae1a3/beef",
                  "yield": 8,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Dairy-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Kosher"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites",
                      "FODMAP"
                  ],
                  "ingredientLines": [
                      "3 to 4 lbs of a brisket cut of beef",
                      "3/4 cup barbeque sauce",
                      "1/4 cup soy sauce",
                      "1 cup of water"
                  ],
                  "ingredients": [
                      {
                          "text": "3 to 4 lbs of a brisket cut of beef",
                          "quantity": 3.5,
                          "measure": "pound",
                          "food": "beef",
                          "weight": 1587.5732950000001,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "3/4 cup barbeque sauce",
                          "quantity": 0.75,
                          "measure": "cup",
                          "food": "barbeque sauce",
                          "weight": 209.25,
                          "foodCategory": "canned soup",
                          "foodId": "food_avt8j2wabi4myjaafpo4makv3lqn",
                          "image": "https://www.edamam.com/food-img/7e3/7e303aa2cbb51e4bd70f71bf5cb4a754.jpg"
                      },
                      {
                          "text": "1/4 cup soy sauce",
                          "quantity": 0.25,
                          "measure": "cup",
                          "food": "soy sauce",
                          "weight": 63.75,
                          "foodCategory": "plant-based protein",
                          "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                          "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                      },
                      {
                          "text": "1 cup of water",
                          "quantity": 1,
                          "measure": "cup",
                          "food": "water",
                          "weight": 236.5882365,
                          "foodCategory": "water",
                          "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
                          "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
                      }
                  ],
                  "calories": 2457.5427835,
                  "totalCO2Emissions": 158244.14388660004,
                  "co2EmissionsClass": "G",
                  "totalWeight": 2097.1615315,
                  "totalTime": 0,
                  "cuisineType": [
                      "british"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2457.5427835,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 78.04392548950001,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 31.733408570500004,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 3.9689332375000004,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 40.0757747045,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 5.3004822145,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 90.42196295400001,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 88.02871295400001,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 2.3932500000000005,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 69.72600000000001,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 349.82093172000003,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1000.17117585,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 6918.796432510001,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 303.572175445,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 410.13377431500004,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 6684.42089035,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 35.443856865499995,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 86.82172408315002,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 3592.70905015,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 54.768965900000005,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.2555,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.3392236360000003,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 2.9212421015000003,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 80.28405662550001,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 9.2687038156,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 60.73719885000001,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 60.73719885000001,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 36.03791379650001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 1.5875732950000003,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 4.531631931000001,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 27.580099425000004,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1544.0168905485002,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 122.87713917500001,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 120.06757767615387,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 158.66704285250003,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 30.140654318000003,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 9.573000000000002,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 699.6418634400001,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 333.39039195,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 288.28318468791673,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 30.357217544500003,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 97.65089864642859,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 142.22172107127662,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 196.91031591944443,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 789.2884007559093,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 513.2441500214286,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 6.085440655555556,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.395,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 111.6019696666667,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 224.71093088461538,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 501.7753539093751,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 712.9772165846153,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 15.184299712500003,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1501.5797415208337,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 10.583821966666669,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 30.210879540000004,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 22.9834161875,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 78.04392548950001,
                          "hasRDI": true,
                          "daily": 120.06757767615387,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 31.733408570500004,
                                  "hasRDI": true,
                                  "daily": 158.66704285250003,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 3.9689332375000004,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 40.0757747045,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 5.3004822145,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 90.42196295400001,
                          "hasRDI": true,
                          "daily": 30.140654318000003,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 88.02871295400001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 2.3932500000000005,
                                  "hasRDI": true,
                                  "daily": 9.573000000000002,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 69.72600000000001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 349.82093172000003,
                          "hasRDI": true,
                          "daily": 699.6418634400001,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1000.17117585,
                          "hasRDI": true,
                          "daily": 333.39039195,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 6918.796432510001,
                          "hasRDI": true,
                          "daily": 288.28318468791673,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 303.572175445,
                          "hasRDI": true,
                          "daily": 30.357217544500003,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 410.13377431500004,
                          "hasRDI": true,
                          "daily": 97.65089864642859,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 6684.42089035,
                          "hasRDI": true,
                          "daily": 142.22172107127662,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 35.443856865499995,
                          "hasRDI": true,
                          "daily": 196.91031591944443,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 86.82172408315002,
                          "hasRDI": true,
                          "daily": 789.2884007559093,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 3592.70905015,
                          "hasRDI": true,
                          "daily": 513.2441500214286,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 54.768965900000005,
                          "hasRDI": true,
                          "daily": 6.085440655555556,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 1.2555,
                          "hasRDI": true,
                          "daily": 1.395,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.3392236360000003,
                          "hasRDI": true,
                          "daily": 111.6019696666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 2.9212421015000003,
                          "hasRDI": true,
                          "daily": 224.71093088461538,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 80.28405662550001,
                          "hasRDI": true,
                          "daily": 501.7753539093751,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 9.2687038156,
                          "hasRDI": true,
                          "daily": 712.9772165846153,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 60.73719885000001,
                          "hasRDI": true,
                          "daily": 15.184299712500003,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 60.73719885000001,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 36.03791379650001,
                          "hasRDI": true,
                          "daily": 1501.5797415208337,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 1.5875732950000003,
                          "hasRDI": true,
                          "daily": 10.583821966666669,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 4.531631931000001,
                          "hasRDI": true,
                          "daily": 30.210879540000004,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 27.580099425000004,
                          "hasRDI": true,
                          "daily": 22.9834161875,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1544.0168905485002,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/710678b0fae9d4fa004975ef91aae1a3?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_89f0821227fd12abbbee648358661834",
                  "label": "Beef Tenderloin",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3344cac4f416f1f4fb030d4f02a873b26def5d9b1c500827d9ff598282ee37ae",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=35c47c084b39d588a6696b6109681b2e876f0ae0bd19e686d07aa6ac080c48e6",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f75b2d218e1b73836e50ededc6d9f6663955efc890e80e6d9c40a322343822dc",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3344cac4f416f1f4fb030d4f02a873b26def5d9b1c500827d9ff598282ee37ae",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/8eb/8eb5ba79991fbec8e35f46dd0613405b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b6460e081dbb67077b643e8b7321efb0b48b6d9b7828b822655999e9725f304a",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Martha Stewart",
                  "url": "http://www.marthastewart.com/344408/beef-tenderloin",
                  "shareAs": "http://www.edamam.com/recipe/beef-tenderloin-89f0821227fd12abbbee648358661834/beef",
                  "yield": 8,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Immuno-Supportive"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "2 1/2 pounds center-cut beef tenderloin, tied by your butcher",
                      "1 tablespoon olive oil",
                      "Coarse salt and ground pepper",
                      "Horseradish Cream, optional",
                      "Bearnaise Sauce, optional"
                  ],
                  "ingredients": [
                      {
                          "text": "2 1/2 pounds center-cut beef tenderloin, tied by your butcher",
                          "quantity": 2.5,
                          "measure": "pound",
                          "food": "beef tenderloin",
                          "weight": 1133.980925,
                          "foodCategory": "meats",
                          "foodId": "food_au8m3zia67rlqoavmsp0cbvzhwiq",
                          "image": "https://www.edamam.com/food-img/f70/f70890fe73fc9e333aa584a88a61e351.jpg"
                      },
                      {
                          "text": "1 tablespoon olive oil",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "olive oil",
                          "weight": 13.5,
                          "foodCategory": "Oils",
                          "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                          "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                      },
                      {
                          "text": "Coarse salt and ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "Coarse salt",
                          "weight": 6.884885550000001,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "Coarse salt and ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "ground pepper",
                          "weight": 3.4424427750000004,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                          "text": "Horseradish Cream, optional",
                          "quantity": 0,
                          "measure": null,
                          "food": "Horseradish",
                          "weight": 0,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_bt10wq1burha64az05cdka9pweff",
                          "image": "https://www.edamam.com/food-img/cc8/cc83e12eb36bdcc3015201c1cfac8656.jpg"
                      },
                      {
                          "text": "Horseradish Cream, optional",
                          "quantity": 0,
                          "measure": null,
                          "food": "Cream",
                          "weight": 0,
                          "foodCategory": "Dairy",
                          "foodId": "food_bvhbvd7bwy6a7wamfrmvmbmen1sz",
                          "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
                      }
                  ],
                  "calories": 2917.57360686525,
                  "totalCO2Emissions": 37859.64971653273,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1156.3576469560269,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2917.57360686525,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 216.59480920946498,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 83.6708746470725,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 96.74337850710725,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 9.1629258688945,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 2.2031633760000005,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 1.3322253539250002,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0.8709380220750002,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0.022031633760000006,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 224.8862371986,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 963.88378625,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 2676.449273293407,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 300.18447974669647,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 232.73710493706028,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 3482.316433991982,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 16.643721542249892,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 39.73573172320352,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 2012.5852968345,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0.9294595492500002,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.593387919197,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.958740373995,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 72.50062495513501,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 6.0654756479752505,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 125.32311702175001,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 125.32311702175001,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 12.473790175000001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 6.629123197359999,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 31.916300951000004,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 700.107404630237,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 145.8786803432625,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 333.2227833991769,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 418.35437323536246,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 0.7343877920000002,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 3.4837520883000006,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 449.7724743972001,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 321.29459541666665,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 111.51871972055861,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 30.018447974669645,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 55.41359641358578,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 74.091839021106,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 92.46511967916607,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 361.23392475639565,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 287.51218526207145,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0.10327328325000003,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 49.448993266416664,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 73.74925953807691,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 453.1289059695938,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 466.57504984425003,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 31.330779255437502,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 519.7412572916668,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 44.19415464906667,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 26.59691745916667,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 216.59480920946498,
                          "hasRDI": true,
                          "daily": 333.2227833991769,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 83.6708746470725,
                                  "hasRDI": true,
                                  "daily": 418.35437323536246,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 96.74337850710725,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 9.1629258688945,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 2.2031633760000005,
                          "hasRDI": true,
                          "daily": 0.7343877920000002,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 1.3322253539250002,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0.8709380220750002,
                                  "hasRDI": true,
                                  "daily": 3.4837520883000006,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0.022031633760000006,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 224.8862371986,
                          "hasRDI": true,
                          "daily": 449.7724743972001,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 963.88378625,
                          "hasRDI": true,
                          "daily": 321.29459541666665,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 2676.449273293407,
                          "hasRDI": true,
                          "daily": 111.51871972055861,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 300.18447974669647,
                          "hasRDI": true,
                          "daily": 30.018447974669645,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 232.73710493706028,
                          "hasRDI": true,
                          "daily": 55.41359641358578,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 3482.316433991982,
                          "hasRDI": true,
                          "daily": 74.091839021106,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 16.643721542249892,
                          "hasRDI": true,
                          "daily": 92.46511967916607,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 39.73573172320352,
                          "hasRDI": true,
                          "daily": 361.23392475639565,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 2012.5852968345,
                          "hasRDI": true,
                          "daily": 287.51218526207145,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 0.9294595492500002,
                          "hasRDI": true,
                          "daily": 0.10327328325000003,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.593387919197,
                          "hasRDI": true,
                          "daily": 49.448993266416664,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 0.958740373995,
                          "hasRDI": true,
                          "daily": 73.74925953807691,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 72.50062495513501,
                          "hasRDI": true,
                          "daily": 453.1289059695938,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 6.0654756479752505,
                          "hasRDI": true,
                          "daily": 466.57504984425003,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 125.32311702175001,
                          "hasRDI": true,
                          "daily": 31.330779255437502,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 125.32311702175001,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 12.473790175000001,
                          "hasRDI": true,
                          "daily": 519.7412572916668,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 6.629123197359999,
                          "hasRDI": true,
                          "daily": 44.19415464906667,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 31.916300951000004,
                          "hasRDI": true,
                          "daily": 26.59691745916667,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 700.107404630237,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/89f0821227fd12abbbee648358661834?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_62ebc9d43ec31eace0c035db993eb1f5",
                  "label": "Roast sirloin of beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/889/88989a61c8c566b8d29ed6b982fb06d8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7461950da3efd81fc925c1b5b8b490930ada10bc6af25bf4996838e9fb5d7ec3",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/889/88989a61c8c566b8d29ed6b982fb06d8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6fd8eadd818ed7126350048e9d5f80eb1ee638cc71b6c4cad21dfea4636a52c8",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/889/88989a61c8c566b8d29ed6b982fb06d8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a6c6f951932a1def17e37ba479351438972daab317a5f351e9d85cda81a5c974",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/889/88989a61c8c566b8d29ed6b982fb06d8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7461950da3efd81fc925c1b5b8b490930ada10bc6af25bf4996838e9fb5d7ec3",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "https://www.bbcgoodfood.com/recipes/roast-sirloin-beef",
                  "shareAs": "http://www.edamam.com/recipe/roast-sirloin-of-beef-62ebc9d43ec31eace0c035db993eb1f5/beef",
                  "yield": 6,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Kosher"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "2 tbsp vegetable oil or beef fat",
                      "1-1.5kg/2lb 4-3lb 5oz sirloin of beef joint",
                      "1 glass red wine",
                      "400g can beef consommé"
                  ],
                  "ingredients": [
                      {
                          "text": "2 tbsp vegetable oil or beef fat",
                          "quantity": 2,
                          "measure": "tablespoon",
                          "food": "vegetable oil",
                          "weight": 28,
                          "foodCategory": "Oils",
                          "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
                          "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
                      },
                      {
                          "text": "1-1.5kg/2lb 4-3lb 5oz sirloin of beef joint",
                          "quantity": 1.25,
                          "measure": "kilogram",
                          "food": "beef",
                          "weight": 1250,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "1 glass red wine",
                          "quantity": 1,
                          "measure": "cup",
                          "food": "red wine",
                          "weight": 235.2,
                          "foodCategory": "wines",
                          "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
                          "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
                      },
                      {
                          "text": "400g can beef consommé",
                          "quantity": 400,
                          "measure": "gram",
                          "food": "beef consommé",
                          "weight": 400,
                          "foodCategory": "canned soup",
                          "foodId": "food_arlagstbtxcrk4ablvuh9b36no9m",
                          "image": "https://www.edamam.com/food-img/6a5/6a5f7cf073a7e70af946bfb4d558a914.jpg"
                      }
                  ],
                  "calories": 2120.44,
                  "totalCO2Emissions": 164681.99973647762,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1913.2,
                  "totalTime": 150,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2120.44,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 88.125,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 26.6978,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 3.33976,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 51.535,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 8.663,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 10.55872,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 10.55872,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 1.45824,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 279.04464,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 787.5,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 2052.908,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 197.31600000000003,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 290.724,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 5217.204,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 28.08692,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 68.55427999999999,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 2818.596,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 25,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.6,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.04776,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 2.245912,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 62.831847999999994,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 7.274064000000001,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 43.852,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 43.852,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 28.375,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 1.25,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 8.354000000000001,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 19.6908,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1491.9979999999998,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 106.022,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 135.57692307692307,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 133.489,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.5195733333333328,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 558.08928,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 262.5,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 85.53783333333332,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 19.731600000000004,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 69.22,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 111.00434042553191,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 156.03844444444445,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 623.2207272727272,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 402.6565714285714,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 2.7777777777777777,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 1.7777777777777777,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 87.31333333333333,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 172.76246153846154,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 392.69904999999994,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 559.5433846153846,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 10.963,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1182.2916666666667,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 8.333333333333334,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 55.69333333333334,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 16.409,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 88.125,
                          "hasRDI": true,
                          "daily": 135.57692307692307,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 26.6978,
                                  "hasRDI": true,
                                  "daily": 133.489,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 3.33976,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 51.535,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 8.663,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 10.55872,
                          "hasRDI": true,
                          "daily": 3.5195733333333328,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 10.55872,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 1.45824,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 279.04464,
                          "hasRDI": true,
                          "daily": 558.08928,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 787.5,
                          "hasRDI": true,
                          "daily": 262.5,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 2052.908,
                          "hasRDI": true,
                          "daily": 85.53783333333332,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 197.31600000000003,
                          "hasRDI": true,
                          "daily": 19.731600000000004,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 290.724,
                          "hasRDI": true,
                          "daily": 69.22,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 5217.204,
                          "hasRDI": true,
                          "daily": 111.00434042553191,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 28.08692,
                          "hasRDI": true,
                          "daily": 156.03844444444445,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 68.55427999999999,
                          "hasRDI": true,
                          "daily": 623.2207272727272,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 2818.596,
                          "hasRDI": true,
                          "daily": 402.6565714285714,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 25,
                          "hasRDI": true,
                          "daily": 2.7777777777777777,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 1.6,
                          "hasRDI": true,
                          "daily": 1.7777777777777777,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.04776,
                          "hasRDI": true,
                          "daily": 87.31333333333333,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 2.245912,
                          "hasRDI": true,
                          "daily": 172.76246153846154,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 62.831847999999994,
                          "hasRDI": true,
                          "daily": 392.69904999999994,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 7.274064000000001,
                          "hasRDI": true,
                          "daily": 559.5433846153846,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 43.852,
                          "hasRDI": true,
                          "daily": 10.963,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 43.852,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 28.375,
                          "hasRDI": true,
                          "daily": 1182.2916666666667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 1.25,
                          "hasRDI": true,
                          "daily": 8.333333333333334,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 8.354000000000001,
                          "hasRDI": true,
                          "daily": 55.69333333333334,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 19.6908,
                          "hasRDI": true,
                          "daily": 16.409,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1491.9979999999998,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/62ebc9d43ec31eace0c035db993eb1f5?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d8c1db573d6f4c23b472ece95e4b197e",
                  "label": "Rich Beef Bouillon",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b94/b9406f7a0f4b0d5121356832c4638248.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70636045e4c7f71e8bfd051805ab06f930758148ccc71155636b18ff51253be8",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b94/b9406f7a0f4b0d5121356832c4638248-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf9780a7d35a57297c9718d2fbfd1f70aeafe12b9e05941a1b44f536a01f2f36",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b94/b9406f7a0f4b0d5121356832c4638248-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3b9e904f6929fef65d0a0be0803c481eef99e3613a4a6fbd11ccfecc85a21ea9",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b94/b9406f7a0f4b0d5121356832c4638248.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70636045e4c7f71e8bfd051805ab06f930758148ccc71155636b18ff51253be8",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b94/b9406f7a0f4b0d5121356832c4638248-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe141e5c026ff2b5d8a39877d34835957e9242269f801d5738777cc42ea8156e",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Saveur",
                  "url": "https://www.saveur.com/rich-beef-bouillon-recipe/",
                  "shareAs": "http://www.edamam.com/recipe/rich-beef-bouillon-d8c1db573d6f4c23b472ece95e4b197e/beef",
                  "yield": 14,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Kosher"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "2 1⁄2 lb. bone-in beef short ribs",
                      "Salt",
                      "4 cups low-sodium or unsalted beef broth",
                      "1 tbsp. soy sauce",
                      "1 large, ripe tomato (8 oz.)"
                  ],
                  "ingredients": [
                      {
                          "text": "2 1⁄2 lb. bone-in beef short ribs",
                          "quantity": 2.5,
                          "measure": "pound",
                          "food": "bone-in beef short ribs",
                          "weight": 1133.980925,
                          "foodCategory": "meats",
                          "foodId": "food_aqt9j4wbqgiplrby40qruavm3a7a",
                          "image": "https://www.edamam.com/food-img/6d7/6d751106490b50afd93bda61c9824efe.jpg"
                      },
                      {
                          "text": "Salt",
                          "quantity": 0,
                          "measure": null,
                          "food": "Salt",
                          "weight": 14.020662660000001,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "4 cups low-sodium or unsalted beef broth",
                          "quantity": 4,
                          "measure": "cup",
                          "food": "beef broth",
                          "weight": 960,
                          "foodCategory": "canned soup",
                          "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
                          "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
                      },
                      {
                          "text": "1 tbsp. soy sauce",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "soy sauce",
                          "weight": 16,
                          "foodCategory": "plant-based protein",
                          "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                          "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                      },
                      {
                          "text": "1 large, ripe tomato (8 oz.)",
                          "quantity": 8,
                          "measure": "ounce",
                          "food": "tomato",
                          "weight": 226.796185,
                          "foodCategory": "vegetables",
                          "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                          "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                      }
                  ],
                  "calories": 4592.954822602999,
                  "totalCO2Emissions": 133794.35978035978,
                  "co2EmissionsClass": "G",
                  "totalWeight": 2342.161023799215,
                  "totalTime": 335,
                  "cuisineType": [
                      "south american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 4592.954822602999,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 411.8690639067,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 179.574453817938,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 186.4637309037885,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 15.229927368530502,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 24.873081852814998,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 22.268467512614997,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 2.6046143402,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 10.675913095605,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 185.32383704948003,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 861.825503,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 5434.1284337628,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 206.06887539681153,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 260.5534667564922,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 4965.997791293438,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 20.975709479582406,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 37.96123484199422,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 1927.2461540539998,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 86.681501907,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 28.27468038395,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.2035687322395,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 2.2773105518865,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 38.979035778398995,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 4.11873039768,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 109.0967255025,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 109.0967255025,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 29.02991168,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 1.2104764530900003,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 17.26437773965,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1674.7889338933485,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 229.64774113014994,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 633.6447137026153,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 897.87226908969,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 8.291027284271665,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 10.4184573608,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 370.64767409896007,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 287.2751676666667,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 226.42201807345,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 20.606887539681153,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 62.036539703926714,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 105.65952747432847,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 116.53171933101336,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 345.10213492722016,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 275.32087915057144,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 9.631277989666668,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 31.416311537722223,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 100.29739435329166,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 175.1777347605,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 243.6189736149937,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 316.8254152061538,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 27.274181375625,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1209.5796533333335,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 8.069843020600002,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 14.386981449708335,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 411.8690639067,
                          "hasRDI": true,
                          "daily": 633.6447137026153,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 179.574453817938,
                                  "hasRDI": true,
                                  "daily": 897.87226908969,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 186.4637309037885,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 15.229927368530502,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 24.873081852814998,
                          "hasRDI": true,
                          "daily": 8.291027284271665,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 22.268467512614997,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 2.6046143402,
                                  "hasRDI": true,
                                  "daily": 10.4184573608,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 10.675913095605,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 185.32383704948003,
                          "hasRDI": true,
                          "daily": 370.64767409896007,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 861.825503,
                          "hasRDI": true,
                          "daily": 287.2751676666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 5434.1284337628,
                          "hasRDI": true,
                          "daily": 226.42201807345,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 206.06887539681153,
                          "hasRDI": true,
                          "daily": 20.606887539681153,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 260.5534667564922,
                          "hasRDI": true,
                          "daily": 62.036539703926714,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 4965.997791293438,
                          "hasRDI": true,
                          "daily": 105.65952747432847,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 20.975709479582406,
                          "hasRDI": true,
                          "daily": 116.53171933101336,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 37.96123484199422,
                          "hasRDI": true,
                          "daily": 345.10213492722016,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 1927.2461540539998,
                          "hasRDI": true,
                          "daily": 275.32087915057144,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 86.681501907,
                          "hasRDI": true,
                          "daily": 9.631277989666668,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 28.27468038395,
                          "hasRDI": true,
                          "daily": 31.416311537722223,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.2035687322395,
                          "hasRDI": true,
                          "daily": 100.29739435329166,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 2.2773105518865,
                          "hasRDI": true,
                          "daily": 175.1777347605,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 38.979035778398995,
                          "hasRDI": true,
                          "daily": 243.6189736149937,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 4.11873039768,
                          "hasRDI": true,
                          "daily": 316.8254152061538,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 109.0967255025,
                          "hasRDI": true,
                          "daily": 27.274181375625,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 109.0967255025,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 29.02991168,
                          "hasRDI": true,
                          "daily": 1209.5796533333335,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 1.2104764530900003,
                          "hasRDI": true,
                          "daily": 8.069843020600002,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 17.26437773965,
                          "hasRDI": true,
                          "daily": 14.386981449708335,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1674.7889338933485,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/d8c1db573d6f4c23b472ece95e4b197e?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d25deaf1dc3c4fe9bb43249ac207b980",
                  "label": "Lemon-pepper Beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da841d19cdd091bfd20622862614f5fb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab52947295a24ec91d6bfeea59afeba2c721b05bd1916dcee451b709f6ca1686",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da841d19cdd091bfd20622862614f5fb-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33219cf39013a940c42f7f968247b6de3107889cd881fd48f1039a968142e7e1",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da841d19cdd091bfd20622862614f5fb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=073c9ffd80ac5161311533d2e240830305381c36fe4fe78c1f5e696232ffe7df",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da841d19cdd091bfd20622862614f5fb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab52947295a24ec91d6bfeea59afeba2c721b05bd1916dcee451b709f6ca1686",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da841d19cdd091bfd20622862614f5fb-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8cbb725f4d1887f7b535d7b2eac1d2a9aa8d238f999d037818fd85166ee8b504",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Food52",
                  "url": "https://food52.com/recipes/25479-lemon-pepper-beef",
                  "shareAs": "http://www.edamam.com/recipe/lemon-pepper-beef-d25deaf1dc3c4fe9bb43249ac207b980/beef",
                  "yield": 10,
                  "dietLabels": [
                      "Low-Carb",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "3 pounds beef roast",
                      "1 tablespoon lemon rind",
                      "1 tablespoon garlic cloves",
                      "2 tablespoons cooking oil"
                  ],
                  "ingredients": [
                      {
                          "text": "3 pounds beef roast",
                          "quantity": 3,
                          "measure": "pound",
                          "food": "beef roast",
                          "weight": 1360.77711,
                          "foodCategory": "meats",
                          "foodId": "food_a94xddzbba3iwnax9cx3nan3xvea",
                          "image": "https://www.edamam.com/food-img/634/634aa9adfb65afb5fef3df13d7334985.jpg"
                      },
                      {
                          "text": "1 tablespoon lemon rind",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "lemon rind",
                          "weight": 6,
                          "foodCategory": "fruit",
                          "foodId": "food_bpg66j3a5vjuuga36uiiyaqeazpd",
                          "image": "https://www.edamam.com/food-img/540/5405605c8e9b284243f06c0b1587ab6f.jpg"
                      },
                      {
                          "text": "1 tablespoon garlic cloves",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "garlic",
                          "weight": 8.499999999856291,
                          "foodCategory": "vegetables",
                          "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                          "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                          "text": "2 tablespoons cooking oil",
                          "quantity": 2,
                          "measure": "tablespoon",
                          "food": "cooking oil",
                          "weight": 28,
                          "foodCategory": "Oils",
                          "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                          "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                      }
                  ],
                  "calories": 2957.3436777997863,
                  "totalCO2Emissions": 45435.20689343592,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1403.2771099998563,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2957.3436777997863,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 194.07530741999926,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 67.11585085799989,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0.11060000000000002,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 89.16639327499999,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 14.208510790399643,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.773499999952432,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 2.95899999995545,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0.8144999999969821,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0.33519999999856287,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 282.3114617699908,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1020.5828325000002,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 723.0168682999756,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 241.14933759973985,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 302.39596419996406,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 4384.563980899424,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 25.230798823997556,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 51.82313017999833,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 2694.45590669978,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0.18,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 10.39199999995516,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.0956139168997128,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 1.9600612672998416,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 85.67638021899899,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 8.430068142098218,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 150.72048209999568,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 150.72048209999568,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 23.949677136000002,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 9.820597595999885,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 39.15937953999756,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 912.0722239299157,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 147.8671838899893,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 298.5773960307681,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 335.5792542899994,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 1.2578333333174774,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 3.2579999999879283,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 564.6229235399816,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 340.19427750000006,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 30.12570284583232,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 24.114933759973983,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 71.99903909522953,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 93.28859533828562,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 140.1711045777642,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 471.1193652727121,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 384.92227238568285,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 0.02,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 11.546666666616845,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 91.30115974164273,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 150.77394363844937,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 535.4773763687436,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 648.4667801614013,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 37.68012052499892,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 997.903214,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 65.47065063999923,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 32.6328162833313,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 194.07530741999926,
                          "hasRDI": true,
                          "daily": 298.5773960307681,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 67.11585085799989,
                                  "hasRDI": true,
                                  "daily": 335.5792542899994,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0.11060000000000002,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 89.16639327499999,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 14.208510790399643,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 3.773499999952432,
                          "hasRDI": true,
                          "daily": 1.2578333333174774,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 2.95899999995545,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0.8144999999969821,
                                  "hasRDI": true,
                                  "daily": 3.2579999999879283,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0.33519999999856287,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 282.3114617699908,
                          "hasRDI": true,
                          "daily": 564.6229235399816,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1020.5828325000002,
                          "hasRDI": true,
                          "daily": 340.19427750000006,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 723.0168682999756,
                          "hasRDI": true,
                          "daily": 30.12570284583232,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 241.14933759973985,
                          "hasRDI": true,
                          "daily": 24.114933759973983,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 302.39596419996406,
                          "hasRDI": true,
                          "daily": 71.99903909522953,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 4384.563980899424,
                          "hasRDI": true,
                          "daily": 93.28859533828562,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 25.230798823997556,
                          "hasRDI": true,
                          "daily": 140.1711045777642,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 51.82313017999833,
                          "hasRDI": true,
                          "daily": 471.1193652727121,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 2694.45590669978,
                          "hasRDI": true,
                          "daily": 384.92227238568285,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 0.18,
                          "hasRDI": true,
                          "daily": 0.02,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 10.39199999995516,
                          "hasRDI": true,
                          "daily": 11.546666666616845,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.0956139168997128,
                          "hasRDI": true,
                          "daily": 91.30115974164273,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 1.9600612672998416,
                          "hasRDI": true,
                          "daily": 150.77394363844937,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 85.67638021899899,
                          "hasRDI": true,
                          "daily": 535.4773763687436,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 8.430068142098218,
                          "hasRDI": true,
                          "daily": 648.4667801614013,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 150.72048209999568,
                          "hasRDI": true,
                          "daily": 37.68012052499892,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 150.72048209999568,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 23.949677136000002,
                          "hasRDI": true,
                          "daily": 997.903214,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 9.820597595999885,
                          "hasRDI": true,
                          "daily": 65.47065063999923,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 39.15937953999756,
                          "hasRDI": true,
                          "daily": 32.6328162833313,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 912.0722239299157,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/d25deaf1dc3c4fe9bb43249ac207b980?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_95e75161a387a319a6f9539ddc02b16d",
                  "label": "Beef Stroganoff",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd8d2b1314661f431258d0e270be0a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8493e6a7b6929c63b0a0a1fc0ee36e8aaf7486501be05c199f99cc0b8f377da",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd8d2b1314661f431258d0e270be0a-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=247d4425f1fd19bcd8bc7b5e93e9ce898a99af21943a67b6f3c8cb5ba34ea972",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd8d2b1314661f431258d0e270be0a-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ecd31fe0870f5a7a972c926fd23c26ae7f2cdfa01242dc6d291759e72dc61786",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a9f/a9fd8d2b1314661f431258d0e270be0a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e8493e6a7b6929c63b0a0a1fc0ee36e8aaf7486501be05c199f99cc0b8f377da",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "Martha Stewart",
                  "url": "https://www.marthastewart.com/341384/beef-stroganoff",
                  "shareAs": "http://www.edamam.com/recipe/beef-stroganoff-95e75161a387a319a6f9539ddc02b16d/beef",
                  "yield": 4,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Keto-Friendly",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Immuno-Supportive"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "1 pound beef tenderloin",
                      "Coarse salt and ground pepper",
                      "3 tablespoons canola oil",
                      "1 medium onion, thinly sliced",
                      "1 pound white mushrooms, sliced 1/2 inch thick",
                      "1 cup reduced-sodium canned beef broth",
                      "1 tablespoon Dijon mustard",
                      "1/2 cup sour cream",
                      "Chopped fresh dill, for garnish"
                  ],
                  "ingredients": [
                      {
                          "text": "1 pound beef tenderloin",
                          "quantity": 1,
                          "measure": "pound",
                          "food": "beef tenderloin",
                          "weight": 453.59237,
                          "foodCategory": "meats",
                          "foodId": "food_au8m3zia67rlqoavmsp0cbvzhwiq",
                          "image": "https://www.edamam.com/food-img/f70/f70890fe73fc9e333aa584a88a61e351.jpg"
                      },
                      {
                          "text": "Coarse salt and ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "Coarse salt",
                          "weight": 8.578483439998422,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "Coarse salt and ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "ground pepper",
                          "weight": 4.289241719999211,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                          "text": "3 tablespoons canola oil",
                          "quantity": 3,
                          "measure": "tablespoon",
                          "food": "canola oil",
                          "weight": 42,
                          "foodCategory": "Oils",
                          "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                          "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                      },
                      {
                          "text": "1 medium onion, thinly sliced",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "onion",
                          "weight": 110,
                          "foodCategory": "vegetables",
                          "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                          "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                          "text": "1 pound white mushrooms, sliced 1/2 inch thick",
                          "quantity": 1,
                          "measure": "pound",
                          "food": "white mushrooms",
                          "weight": 453.59237,
                          "foodCategory": "vegetables",
                          "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
                          "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
                      },
                      {
                          "text": "1 cup reduced-sodium canned beef broth",
                          "quantity": 1,
                          "measure": "cup",
                          "food": "canned beef broth",
                          "weight": 240,
                          "foodCategory": "canned soup",
                          "foodId": "food_a4blma9bmbzb9aa6dt0qmbzeb1o1",
                          "image": "https://www.edamam.com/food-img/6f7/6f71425571cb38887c2287f9860d33bd.jpg"
                      },
                      {
                          "text": "1 tablespoon Dijon mustard",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "Dijon mustard",
                          "weight": 15.5624999997369,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a34cdj5b0kyuhfbov30xcb50u4dv",
                          "image": "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg"
                      },
                      {
                          "text": "1/2 cup sour cream",
                          "quantity": 0.5,
                          "measure": "cup",
                          "food": "sour cream",
                          "weight": 115,
                          "foodCategory": "Dairy",
                          "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                          "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                      },
                      {
                          "text": "Chopped fresh dill, for garnish",
                          "quantity": 0,
                          "measure": null,
                          "food": "fresh dill",
                          "weight": 0,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_avhhd2padkkzx8a9swnmlb1km3qb",
                          "image": "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg"
                      }
                  ],
                  "calories": 1895.5110483170404,
                  "totalCO2Emissions": 42223.81366968274,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1439.1407394663045,
                  "totalTime": 45,
                  "cuisineType": [
                      "eastern europe"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "condiments and sauces"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 1895.5110483170404,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 148.3428650680632,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 48.04013027190744,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 1.0827006249999764,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 67.21093553830505,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 16.738136290363556,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 34.13401971278415,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 26.020417857634875,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 8.113601855149277,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 17.737255073005578,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 111.60741213187009,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 453.4035145000001,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 3334.823157509613,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 312.8866012786072,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 173.69743321853807,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 3331.8688731953152,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 10.157718412571365,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 18.956659508212876,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 1367.032435017315,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 144.53622026438666,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 18.747127269999215,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.7138558581571336,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 2.496373303295815,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 47.60261248060651,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 3.120444764005014,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 161.42440969238146,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 161.42440969238146,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 5.580453018000002,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0.9071847400000002,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 9.814721067887044,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 46.620709340795024,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1128.873018400273,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 94.77555241585202,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 228.2197924124049,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 240.20065135953718,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 11.37800657092805,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 32.45440742059711,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 223.21482426374018,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 151.13450483333335,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 138.95096489623387,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 31.28866012786072,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 41.356531718699536,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 70.89082708926203,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 56.431768958729805,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 172.3332682564807,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 195.29034785961645,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 16.059580029376296,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 20.830141411110237,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 59.48798817976113,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 192.0287156381396,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 297.5163280037907,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 240.0342126157703,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 40.356102423095365,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 232.5188757500001,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 6.047898266666667,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 65.43147378591362,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 38.85059111732918,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 148.3428650680632,
                          "hasRDI": true,
                          "daily": 228.2197924124049,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 48.04013027190744,
                                  "hasRDI": true,
                                  "daily": 240.20065135953718,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 1.0827006249999764,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 67.21093553830505,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 16.738136290363556,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 34.13401971278415,
                          "hasRDI": true,
                          "daily": 11.37800657092805,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 26.020417857634875,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 8.113601855149277,
                                  "hasRDI": true,
                                  "daily": 32.45440742059711,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 17.737255073005578,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 111.60741213187009,
                          "hasRDI": true,
                          "daily": 223.21482426374018,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 453.4035145000001,
                          "hasRDI": true,
                          "daily": 151.13450483333335,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 3334.823157509613,
                          "hasRDI": true,
                          "daily": 138.95096489623387,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 312.8866012786072,
                          "hasRDI": true,
                          "daily": 31.28866012786072,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 173.69743321853807,
                          "hasRDI": true,
                          "daily": 41.356531718699536,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 3331.8688731953152,
                          "hasRDI": true,
                          "daily": 70.89082708926203,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 10.157718412571365,
                          "hasRDI": true,
                          "daily": 56.431768958729805,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 18.956659508212876,
                          "hasRDI": true,
                          "daily": 172.3332682564807,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 1367.032435017315,
                          "hasRDI": true,
                          "daily": 195.29034785961645,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 144.53622026438666,
                          "hasRDI": true,
                          "daily": 16.059580029376296,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 18.747127269999215,
                          "hasRDI": true,
                          "daily": 20.830141411110237,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.7138558581571336,
                          "hasRDI": true,
                          "daily": 59.48798817976113,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 2.496373303295815,
                          "hasRDI": true,
                          "daily": 192.0287156381396,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 47.60261248060651,
                          "hasRDI": true,
                          "daily": 297.5163280037907,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 3.120444764005014,
                          "hasRDI": true,
                          "daily": 240.0342126157703,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 161.42440969238146,
                          "hasRDI": true,
                          "daily": 40.356102423095365,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 161.42440969238146,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 5.580453018000002,
                          "hasRDI": true,
                          "daily": 232.5188757500001,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0.9071847400000002,
                          "hasRDI": true,
                          "daily": 6.047898266666667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 9.814721067887044,
                          "hasRDI": true,
                          "daily": 65.43147378591362,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 46.620709340795024,
                          "hasRDI": true,
                          "daily": 38.85059111732918,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1128.873018400273,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/95e75161a387a319a6f9539ddc02b16d?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14d5bf8bff297d0e4960412e59180af6",
                  "label": "Garlic beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5cb/5cbe927d0ebc17c73cf3ab336d9fc0f3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f11ec1519d7d41b23b6c1393bb61eb28e71f4965169a6bb205783e169a625f92",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5cb/5cbe927d0ebc17c73cf3ab336d9fc0f3-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=09230da34187d7a328bf1479b6f4e88aab4053b4adbaae38b45ff7aa800c597c",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5cb/5cbe927d0ebc17c73cf3ab336d9fc0f3-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8526a29cf72b34e14c738688222ca9acf5972146430502eddd6f6c46f57fade",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5cb/5cbe927d0ebc17c73cf3ab336d9fc0f3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f11ec1519d7d41b23b6c1393bb61eb28e71f4965169a6bb205783e169a625f92",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "https://www.bbcgoodfood.com/recipes/garlic-beef",
                  "shareAs": "http://www.edamam.com/recipe/garlic-beef-14d5bf8bff297d0e4960412e59180af6/beef",
                  "yield": 4,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "1 tbsp black peppercorn",
                      "6 garlic cloves",
                      "4 tbsp red wine vinegar",
                      "600g piece well-trimmed beef skirt"
                  ],
                  "ingredients": [
                      {
                          "text": "1 tbsp black peppercorn",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "black peppercorn",
                          "weight": 6.9,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                          "text": "6 garlic cloves",
                          "quantity": 6,
                          "measure": "clove",
                          "food": "garlic",
                          "weight": 18,
                          "foodCategory": "vegetables",
                          "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                          "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                          "text": "4 tbsp red wine vinegar",
                          "quantity": 4,
                          "measure": "tablespoon",
                          "food": "red wine vinegar",
                          "weight": 59.6,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_ad6iyy1anmzb49a817rgnabnz8c9",
                          "image": "https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg"
                      },
                      {
                          "text": "600g piece well-trimmed beef skirt",
                          "quantity": 600,
                          "measure": "gram",
                          "food": "beef",
                          "weight": 600,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      }
                  ],
                  "calories": 835.463,
                  "totalCO2Emissions": 59816.5730361568,
                  "co2EmissionsClass": "G",
                  "totalWeight": 684.5,
                  "totalTime": 15,
                  "cuisineType": [
                      "eastern europe"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 835.463,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 29.17494,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 12.051929999999999,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 1.5,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 15.112970999999998,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 1.973682,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 11.254920000000002,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 9.131220000000003,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 2.1237000000000004,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0.22416,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 131.48624,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 378,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 483.208,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 144.723,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 144.683,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 2425.194,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 13.784189999999999,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 32.76879,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 1345.21,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 13.863,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 5.914,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.523452,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 1.05222,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 29.544659999999997,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 3.6512789999999993,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 19.713,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 19.713,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 13.620000000000001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0.6000000000000001,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 1.16616,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 20.622,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 501.53249999999997,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 41.77315,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 44.88452307692308,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 60.259649999999986,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.7516400000000005,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 8.494800000000001,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 262.97248,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 126,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 20.133666666666667,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 14.4723,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 34.44833333333333,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 51.59987234042553,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 76.57883333333332,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 297.89809090909097,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 192.17285714285714,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 1.5403333333333333,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 6.571111111111111,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 43.62100000000001,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 80.94,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 184.654125,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 280.86761538461536,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 4.92825,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 567.5,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 4.000000000000001,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 7.774400000000001,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 17.185,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 29.17494,
                          "hasRDI": true,
                          "daily": 44.88452307692308,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 12.051929999999999,
                                  "hasRDI": true,
                                  "daily": 60.259649999999986,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 1.5,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 15.112970999999998,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 1.973682,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 11.254920000000002,
                          "hasRDI": true,
                          "daily": 3.7516400000000005,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 9.131220000000003,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 2.1237000000000004,
                                  "hasRDI": true,
                                  "daily": 8.494800000000001,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0.22416,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 131.48624,
                          "hasRDI": true,
                          "daily": 262.97248,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 378,
                          "hasRDI": true,
                          "daily": 126,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 483.208,
                          "hasRDI": true,
                          "daily": 20.133666666666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 144.723,
                          "hasRDI": true,
                          "daily": 14.4723,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 144.683,
                          "hasRDI": true,
                          "daily": 34.44833333333333,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 2425.194,
                          "hasRDI": true,
                          "daily": 51.59987234042553,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 13.784189999999999,
                          "hasRDI": true,
                          "daily": 76.57883333333332,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 32.76879,
                          "hasRDI": true,
                          "daily": 297.89809090909097,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 1345.21,
                          "hasRDI": true,
                          "daily": 192.17285714285714,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 13.863,
                          "hasRDI": true,
                          "daily": 1.5403333333333333,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 5.914,
                          "hasRDI": true,
                          "daily": 6.571111111111111,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.523452,
                          "hasRDI": true,
                          "daily": 43.62100000000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 1.05222,
                          "hasRDI": true,
                          "daily": 80.94,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 29.544659999999997,
                          "hasRDI": true,
                          "daily": 184.654125,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 3.6512789999999993,
                          "hasRDI": true,
                          "daily": 280.86761538461536,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 19.713,
                          "hasRDI": true,
                          "daily": 4.92825,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 19.713,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 13.620000000000001,
                          "hasRDI": true,
                          "daily": 567.5,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0.6000000000000001,
                          "hasRDI": true,
                          "daily": 4.000000000000001,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 1.16616,
                          "hasRDI": true,
                          "daily": 7.774400000000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 20.622,
                          "hasRDI": true,
                          "daily": 17.185,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 501.53249999999997,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/14d5bf8bff297d0e4960412e59180af6?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_951bcdad1f74490a95e0be215a73decc",
                  "label": "Beef Skewers",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/cfa/cfab9146ced2f4fc289bc5be55c25871.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3730c014cf08b2c0b75029b17682e4d8caccb4206a921e60bfe7e90eb4a71d1b",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/cfa/cfab9146ced2f4fc289bc5be55c25871-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=121c6fc61f45f0b9eff6426021ad74d3dc889efd0f5d455113da8f1675ae0fb3",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/cfa/cfab9146ced2f4fc289bc5be55c25871-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3d1950f9c7b4a1603a72daba5f2c24b41be2fe5c401bbbd0934b4fa0abaa2191",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/cfa/cfab9146ced2f4fc289bc5be55c25871.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3730c014cf08b2c0b75029b17682e4d8caccb4206a921e60bfe7e90eb4a71d1b",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/cfa/cfab9146ced2f4fc289bc5be55c25871-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5ab83a2d4fdc81b8ac435eb63ecf235d629ca312fbf185a6b7b14379fae909d4",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Saveur",
                  "url": "https://www.saveur.com/article/Recipes/Espetada-Beef-Skewers/",
                  "shareAs": "http://www.edamam.com/recipe/beef-skewers-951bcdad1f74490a95e0be215a73decc/beef",
                  "yield": 4,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "4 lb. untrimmed aged sirloin beef",
                      "3 tbsp. sea salt, preferably Maldon",
                      "6-7 cloves garlic, peeled and crushed",
                      "6 bay leaves, torn into pieces"
                  ],
                  "ingredients": [
                      {
                          "text": "4 lb. untrimmed aged sirloin beef",
                          "quantity": 4,
                          "measure": "pound",
                          "food": "sirloin beef",
                          "weight": 1814.36948,
                          "foodCategory": "meats",
                          "foodId": "food_aifm62daw1i6txalya881bcetyzn",
                          "image": "https://www.edamam.com/food-img/4f1/4f10105d5c8178f25590ca6dfcd37fca.jpg"
                      },
                      {
                          "text": "3 tbsp. sea salt, preferably Maldon",
                          "quantity": 3,
                          "measure": "tablespoon",
                          "food": "sea salt",
                          "weight": 43.68749999926138,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "6-7 cloves garlic, peeled and crushed",
                          "quantity": 6.5,
                          "measure": "clove",
                          "food": "garlic",
                          "weight": 19.5,
                          "foodCategory": "vegetables",
                          "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                          "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                          "text": "6 bay leaves, torn into pieces",
                          "quantity": 6,
                          "measure": "<unit>",
                          "food": "bay leaves",
                          "weight": 3.5999999999999996,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
                          "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
                      }
                  ],
                  "calories": 3923.0736872,
                  "totalCO2Emissions": 60518.93794649994,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1846.0868178648207,
                  "totalTime": 0,
                  "cuisineType": [
                      "mediterranean"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "starter"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 3923.0736872,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 259.85329564000006,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 104.607117048,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 111.10059717600001,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 9.983021276400002,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 9.1545,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 7.7982000000000005,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 1.3563,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 0.195,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 362.57368652,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1415.2081944000001,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 4272.9985263504,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 520.979531087557,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 372.15506937864825,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 5704.330080229186,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 28.397731622953906,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 65.14100777386483,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 3317.911758800001,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 11.123999999999999,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 7.757999999999999,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.0009398244,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 1.5606763632000002,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 116.69102061600002,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 10.0294604128,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 206.64564280000002,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 206.64564280000002,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 20.139501228000004,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 6.7287670760000005,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 27.5470422,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1189.16586719573,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 196.15368436,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 399.7743009846155,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 523.03558524,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.0515000000000003,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 5.4252,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 725.14737304,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 471.73606480000007,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 178.04160526460004,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 52.097953108755696,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 88.6083498520591,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 121.36872511125928,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 157.76517568307725,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 592.1909797624076,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 473.98739411428585,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 1.2359999999999998,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 8.62,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 83.41165203333334,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 120.05202793846155,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 729.3188788500001,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 771.4969548307693,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 51.661410700000005,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 839.1458845000002,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 44.85844717333334,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 22.9558685,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 259.85329564000006,
                          "hasRDI": true,
                          "daily": 399.7743009846155,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 104.607117048,
                                  "hasRDI": true,
                                  "daily": 523.03558524,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 111.10059717600001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 9.983021276400002,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 9.1545,
                          "hasRDI": true,
                          "daily": 3.0515000000000003,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 7.7982000000000005,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 1.3563,
                                  "hasRDI": true,
                                  "daily": 5.4252,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 0.195,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 362.57368652,
                          "hasRDI": true,
                          "daily": 725.14737304,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1415.2081944000001,
                          "hasRDI": true,
                          "daily": 471.73606480000007,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 4272.9985263504,
                          "hasRDI": true,
                          "daily": 178.04160526460004,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 520.979531087557,
                          "hasRDI": true,
                          "daily": 52.097953108755696,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 372.15506937864825,
                          "hasRDI": true,
                          "daily": 88.6083498520591,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 5704.330080229186,
                          "hasRDI": true,
                          "daily": 121.36872511125928,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 28.397731622953906,
                          "hasRDI": true,
                          "daily": 157.76517568307725,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 65.14100777386483,
                          "hasRDI": true,
                          "daily": 592.1909797624076,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 3317.911758800001,
                          "hasRDI": true,
                          "daily": 473.98739411428585,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 11.123999999999999,
                          "hasRDI": true,
                          "daily": 1.2359999999999998,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 7.757999999999999,
                          "hasRDI": true,
                          "daily": 8.62,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.0009398244,
                          "hasRDI": true,
                          "daily": 83.41165203333334,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 1.5606763632000002,
                          "hasRDI": true,
                          "daily": 120.05202793846155,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 116.69102061600002,
                          "hasRDI": true,
                          "daily": 729.3188788500001,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 10.0294604128,
                          "hasRDI": true,
                          "daily": 771.4969548307693,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 206.64564280000002,
                          "hasRDI": true,
                          "daily": 51.661410700000005,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 206.64564280000002,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 20.139501228000004,
                          "hasRDI": true,
                          "daily": 839.1458845000002,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 6.7287670760000005,
                          "hasRDI": true,
                          "daily": 44.85844717333334,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 27.5470422,
                          "hasRDI": true,
                          "daily": 22.9558685,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1189.16586719573,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/951bcdad1f74490a95e0be215a73decc?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4d16e7b23f0c5300e3b71f0e40cbaa8f",
                  "label": "Hearty Beef Stew",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ec6/ec696c280d35e9d4fc6f5fe0f4d1ec4e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ad1bd0f507b5386d1b11d204b24d42dafe6aba560f7c9b90d0194ef83328f1a",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec6/ec696c280d35e9d4fc6f5fe0f4d1ec4e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=affc1b5a66f35290fb907878cabeefbe7db6d54ebbe404506238cf7d749bd3fa",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec6/ec696c280d35e9d4fc6f5fe0f4d1ec4e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=efe2200a6db276e362e3a6652643a1fe284ae99cd7bc1c1e02814baa4bf141bd",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ec6/ec696c280d35e9d4fc6f5fe0f4d1ec4e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8ad1bd0f507b5386d1b11d204b24d42dafe6aba560f7c9b90d0194ef83328f1a",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "Martha Stewart",
                  "url": "https://www.marthastewart.com/1155126/hearty-beef-stew",
                  "shareAs": "http://www.edamam.com/recipe/hearty-beef-stew-4d16e7b23f0c5300e3b71f0e40cbaa8f/beef",
                  "yield": 10,
                  "dietLabels": [
                      "Low-Fat"
                  ],
                  "healthLabels": [
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "1 recipe Basic Beef Stock, including reserved shredded beef and tomato pieces",
                      "1 pound pearl onions, peeled",
                      "5 medium carrots, cut into matchsticks",
                      "1/2 small bunch fresh dill, roughly chopped",
                      "Coarse salt and freshly ground pepper",
                      "1 ten-ounce package frozen green peas, thawed"
                  ],
                  "ingredients": [
                      {
                          "text": "1 recipe Basic Beef Stock, including reserved shredded beef and tomato pieces",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "Beef Stock",
                          "weight": 435,
                          "foodCategory": "canned soup",
                          "foodId": "food_a4blma9bmbzb9aa6dt0qmbzeb1o1",
                          "image": "https://www.edamam.com/food-img/6f7/6f71425571cb38887c2287f9860d33bd.jpg"
                      },
                      {
                          "text": "1 recipe Basic Beef Stock, including reserved shredded beef and tomato pieces",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "tomato",
                          "weight": 123,
                          "foodCategory": "vegetables",
                          "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                          "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                      },
                      {
                          "text": "1 pound pearl onions, peeled",
                          "quantity": 1,
                          "measure": "pound",
                          "food": "pearl onions",
                          "weight": 453.59237,
                          "foodCategory": "vegetables",
                          "foodId": "food_bye6035blu09tpb1bnvdsb2js8j6",
                          "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                          "text": "5 medium carrots, cut into matchsticks",
                          "quantity": 5,
                          "measure": "<unit>",
                          "food": "carrots",
                          "weight": 305,
                          "foodCategory": "vegetables",
                          "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                          "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                          "text": "1/2 small bunch fresh dill, roughly chopped",
                          "quantity": 0.5,
                          "measure": "bunch",
                          "food": "fresh dill",
                          "weight": 0.8999999999999999,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_avhhd2padkkzx8a9swnmlb1km3qb",
                          "image": "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg"
                      },
                      {
                          "text": "Coarse salt and freshly ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "Coarse salt",
                          "weight": 9.605925607500001,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                          "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                      },
                      {
                          "text": "Coarse salt and freshly ground pepper",
                          "quantity": 0,
                          "measure": null,
                          "food": "pepper",
                          "weight": 4.802962803750001,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                          "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                      },
                      {
                          "text": "1 ten-ounce package frozen green peas, thawed",
                          "quantity": 10,
                          "measure": "ounce",
                          "food": "green peas",
                          "weight": 283.49523125,
                          "foodCategory": "vegetables",
                          "foodId": "food_bbi35jtbjt7un9bsa2m7eazlsk91",
                          "image": "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg"
                      }
                  ],
                  "calories": 601.1505219499126,
                  "totalCO2Emissions": 44001.362167938605,
                  "co2EmissionsClass": "G",
                  "totalWeight": 1610.5988264041946,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 601.1505219499126,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 3.689229882402251,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 1.0696315925596251,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 0.6671322341572126,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 1.112725354118925,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 120.5036168524,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 85.38326879180124,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 35.12034806059875,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 53.029135061819005,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 29.763505735340004,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 3734.2338408957153,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 338.55316109721923,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 206.49881233041697,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 2927.289290727911,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 7.648068830375592,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 5.2977014162150695,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 638.719318279925,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 2710.9089878320124,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 182.57492788000002,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.22396900515305,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.79961297819675,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 13.64187125828775,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1.6018594065714127,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 357.7209542891375,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 357.7209542891375,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 0.30450000000000005,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 3.1864130877840005,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 129.97504582815,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 1439.3225260014196,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 30.05752609749563,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 5.675738280618847,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 5.348157962798125,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 40.16787228413334,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 140.481392242395,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 59.52701147068001,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 155.59307670398815,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 33.85531610972192,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 49.166383888194524,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 62.282750866551304,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 42.4892712798644,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 48.16092196559154,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 91.24561689713214,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 301.2121097591125,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 202.8610309777778,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 101.9974170960875,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 61.508690630519226,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 85.26169536429845,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 123.21995435164712,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 89.43023857228438,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 12.687500000000004,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 21.242753918560005,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 108.312538190125,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 3.689229882402251,
                          "hasRDI": true,
                          "daily": 5.675738280618847,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 1.0696315925596251,
                                  "hasRDI": true,
                                  "daily": 5.348157962798125,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 0.6671322341572126,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 1.112725354118925,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 120.5036168524,
                          "hasRDI": true,
                          "daily": 40.16787228413334,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 85.38326879180124,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 35.12034806059875,
                                  "hasRDI": true,
                                  "daily": 140.481392242395,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 53.029135061819005,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 29.763505735340004,
                          "hasRDI": true,
                          "daily": 59.52701147068001,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 3734.2338408957153,
                          "hasRDI": true,
                          "daily": 155.59307670398815,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 338.55316109721923,
                          "hasRDI": true,
                          "daily": 33.85531610972192,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 206.49881233041697,
                          "hasRDI": true,
                          "daily": 49.166383888194524,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 2927.289290727911,
                          "hasRDI": true,
                          "daily": 62.282750866551304,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 7.648068830375592,
                          "hasRDI": true,
                          "daily": 42.4892712798644,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 5.2977014162150695,
                          "hasRDI": true,
                          "daily": 48.16092196559154,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 638.719318279925,
                          "hasRDI": true,
                          "daily": 91.24561689713214,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 2710.9089878320124,
                          "hasRDI": true,
                          "daily": 301.2121097591125,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 182.57492788000002,
                          "hasRDI": true,
                          "daily": 202.8610309777778,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.22396900515305,
                          "hasRDI": true,
                          "daily": 101.9974170960875,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 0.79961297819675,
                          "hasRDI": true,
                          "daily": 61.508690630519226,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 13.64187125828775,
                          "hasRDI": true,
                          "daily": 85.26169536429845,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 1.6018594065714127,
                          "hasRDI": true,
                          "daily": 123.21995435164712,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 357.7209542891375,
                          "hasRDI": true,
                          "daily": 89.43023857228438,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 357.7209542891375,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 0.30450000000000005,
                          "hasRDI": true,
                          "daily": 12.687500000000004,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 3.1864130877840005,
                          "hasRDI": true,
                          "daily": 21.242753918560005,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 129.97504582815,
                          "hasRDI": true,
                          "daily": 108.312538190125,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 1439.3225260014196,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/4d16e7b23f0c5300e3b71f0e40cbaa8f?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4b6aefe070f846c7a7792f8184ad5ff9",
                  "label": "Crockpot Beef Stew",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06f53f13c9763049857f2b819007a59f9f126aefcd3bc068b0fcd1782967c612",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=02532b3c9d28e5a46d26ebfd20ea68dcc4c7ae10a94eddd05166bc8465abefe8",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c96c5cce7638fd7f64df7751ca808177fdf1d23eacf5940688c95b175a923711",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/d7a/d7aadde1ff6875e8d46f46c692691d73.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06f53f13c9763049857f2b819007a59f9f126aefcd3bc068b0fcd1782967c612",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "Food52",
                  "url": "https://food52.com/recipes/20960-crockpot-beef-stew",
                  "shareAs": "http://www.edamam.com/recipe/crockpot-beef-stew-4b6aefe070f846c7a7792f8184ad5ff9/beef",
                  "yield": 5,
                  "dietLabels": [
                      "High-Fiber",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free"
                  ],
                  "cautions": [
                      "Gluten",
                      "Wheat",
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "3 pounds Beef shank and/or Beef sirloin",
                      "2 Turnips, peeled, stems removed",
                      "2 potatoes",
                      "2 Carrots, washed",
                      "1 Parsnip",
                      "1 Large yellow onion",
                      "1 sprig Parsley",
                      "Peeled garlic cloves, to taste",
                      "1 Celery stick",
                      "8 cups Beef stock",
                      "1 garlic bouillon cube"
                  ],
                  "ingredients": [
                      {
                          "text": "3 pounds Beef shank and/or Beef sirloin",
                          "quantity": 3,
                          "measure": "pound",
                          "food": "Beef sirloin",
                          "weight": 1360.77711,
                          "foodCategory": "meats",
                          "foodId": "food_aifm62daw1i6txalya881bcetyzn",
                          "image": "https://www.edamam.com/food-img/4f1/4f10105d5c8178f25590ca6dfcd37fca.jpg"
                      },
                      {
                          "text": "2 Turnips, peeled, stems removed",
                          "quantity": 2,
                          "measure": "<unit>",
                          "food": "Turnips",
                          "weight": 233.15555555555554,
                          "foodCategory": "vegetables",
                          "foodId": "food_buj0e74bxco8n0betbsnzayddt6a",
                          "image": "https://www.edamam.com/food-img/eb6/eb6a9e33bb3d24c118aca42c5b4b1971.jpg"
                      },
                      {
                          "text": "2 potatoes",
                          "quantity": 2,
                          "measure": "<unit>",
                          "food": "potatoes",
                          "weight": 426,
                          "foodCategory": "vegetables",
                          "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                          "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                      },
                      {
                          "text": "2 Carrots, washed",
                          "quantity": 2,
                          "measure": "<unit>",
                          "food": "Carrots",
                          "weight": 122,
                          "foodCategory": "vegetables",
                          "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                          "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                          "text": "1 Parsnip",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "Parsnip",
                          "weight": 133,
                          "foodCategory": "vegetables",
                          "foodId": "food_admr9qdb3d66y9blt7afaazt0dbq",
                          "image": "https://www.edamam.com/food-img/ec2/ec2f9c27d98c2ca45687f96e3e487868.jpg"
                      },
                      {
                          "text": "1 Large yellow onion",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "yellow onion",
                          "weight": 150,
                          "foodCategory": "vegetables",
                          "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                          "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                          "text": "1 sprig Parsley",
                          "quantity": 1,
                          "measure": "sprig",
                          "food": "Parsley",
                          "weight": 1,
                          "foodCategory": "vegetables",
                          "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                          "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                      },
                      {
                          "text": "Peeled garlic cloves, to taste",
                          "quantity": 0,
                          "measure": null,
                          "food": "garlic",
                          "weight": 13.172797996666668,
                          "foodCategory": "vegetables",
                          "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                          "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                      },
                      {
                          "text": "1 Celery stick",
                          "quantity": 1,
                          "measure": "stick",
                          "food": "Celery",
                          "weight": 40,
                          "foodCategory": "vegetables",
                          "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                          "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
                      },
                      {
                          "text": "8 cups Beef stock",
                          "quantity": 8,
                          "measure": "cup",
                          "food": "Beef stock",
                          "weight": 1920,
                          "foodCategory": "canned soup",
                          "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
                          "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
                      },
                      {
                          "text": "1 garlic bouillon cube",
                          "quantity": 1,
                          "measure": "cube",
                          "food": "bouillon",
                          "weight": 5,
                          "foodCategory": "canned soup",
                          "foodId": "food_a4blma9bmbzb9aa6dt0qmbzeb1o1",
                          "image": "https://www.edamam.com/food-img/6f7/6f71425571cb38887c2287f9860d33bd.jpg"
                      }
                  ],
                  "calories": 3790.674039970589,
                  "totalCO2Emissions": 237321.2610508872,
                  "co2EmissionsClass": "G",
                  "totalWeight": 4404.105463552222,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 3790.6740399705895,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 197.93024627553893,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 79.38879243732816,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 84.33246747311294,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 8.066102418756145,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 167.83299835911887,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 141.25756960118886,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 26.575428757930002,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 41.924139091077784,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 325.031134842588,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1061.4061458,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 4834.249923981655,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 779.0237085406334,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 606.6857326102778,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 11285.841300977743,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 31.041550038610005,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 55.29926728376134,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 3575.5929500349,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 1031.71,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 180.4725796416267,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 2.0980596865155556,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 3.313599516863,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 112.1290822701989,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 10.491488004758667,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 444.1639993732333,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 444.1639993732333,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 15.108125921000003,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 8.282360212064,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 106.05774977149889,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 3674.8335595716026,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 189.5337019985295,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 304.5080711931368,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 396.9439621866408,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 55.944332786372954,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 106.30171503172001,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 650.062269685176,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 353.80204860000003,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 201.4270801659023,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 77.90237085406334,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 144.44898395482804,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 240.12428299952646,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 172.45305577005558,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 502.7206116705576,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 510.79899286212856,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 114.63444444444444,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 200.52508849069636,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 174.83830720962965,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 254.89227052792307,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 700.806764188743,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 807.0375388275897,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 111.04099984330833,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 629.5052467083335,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 55.21573474709334,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 88.38145814291575,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 197.93024627553893,
                          "hasRDI": true,
                          "daily": 304.5080711931368,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 79.38879243732816,
                                  "hasRDI": true,
                                  "daily": 396.9439621866408,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 84.33246747311294,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 8.066102418756145,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 167.83299835911887,
                          "hasRDI": true,
                          "daily": 55.944332786372954,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 141.25756960118886,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 26.575428757930002,
                                  "hasRDI": true,
                                  "daily": 106.30171503172001,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 41.924139091077784,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 325.031134842588,
                          "hasRDI": true,
                          "daily": 650.062269685176,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1061.4061458,
                          "hasRDI": true,
                          "daily": 353.80204860000003,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 4834.249923981655,
                          "hasRDI": true,
                          "daily": 201.4270801659023,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 779.0237085406334,
                          "hasRDI": true,
                          "daily": 77.90237085406334,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 606.6857326102778,
                          "hasRDI": true,
                          "daily": 144.44898395482804,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 11285.841300977743,
                          "hasRDI": true,
                          "daily": 240.12428299952646,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 31.041550038610005,
                          "hasRDI": true,
                          "daily": 172.45305577005558,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 55.29926728376134,
                          "hasRDI": true,
                          "daily": 502.7206116705576,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 3575.5929500349,
                          "hasRDI": true,
                          "daily": 510.79899286212856,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 1031.71,
                          "hasRDI": true,
                          "daily": 114.63444444444444,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 180.4725796416267,
                          "hasRDI": true,
                          "daily": 200.52508849069636,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 2.0980596865155556,
                          "hasRDI": true,
                          "daily": 174.83830720962965,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 3.313599516863,
                          "hasRDI": true,
                          "daily": 254.89227052792307,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 112.1290822701989,
                          "hasRDI": true,
                          "daily": 700.806764188743,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 10.491488004758667,
                          "hasRDI": true,
                          "daily": 807.0375388275897,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 444.1639993732333,
                          "hasRDI": true,
                          "daily": 111.04099984330833,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 444.1639993732333,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 15.108125921000003,
                          "hasRDI": true,
                          "daily": 629.5052467083335,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 8.282360212064,
                          "hasRDI": true,
                          "daily": 55.21573474709334,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 106.05774977149889,
                          "hasRDI": true,
                          "daily": 88.38145814291575,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 3674.8335595716026,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/4b6aefe070f846c7a7792f8184ad5ff9?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b12051c8c93341e98fbd35a80aa10e33",
                  "label": "Next level minced beef tacos",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ca4/ca4ede83d721171d251025f1e11ce2d4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6362f9ad65849112c8934eb0132e4fe6e0e93e2393b63a270429983a6f577c55",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca4/ca4ede83d721171d251025f1e11ce2d4-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4608f09b626312c4fe10789d8b131153c268e4aa9f9d96b656e53b386e73eb6f",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca4/ca4ede83d721171d251025f1e11ce2d4-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=248f74e91661e5a079aa82dcdd8fb2a3704f36c54fbe35b56c9a966f23763145",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca4/ca4ede83d721171d251025f1e11ce2d4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6362f9ad65849112c8934eb0132e4fe6e0e93e2393b63a270429983a6f577c55",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ca4/ca4ede83d721171d251025f1e11ce2d4-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b6b281619f528cbd7c615d8e6fe3dd733904901c5d8bfe98f255a2e5d21134c1",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "https://www.bbcgoodfood.com/recipes/next-level-minced-beef-tacos",
                  "shareAs": "http://www.edamam.com/recipe/next-level-minced-beef-tacos-b12051c8c93341e98fbd35a80aa10e33/beef",
                  "yield": 3,
                  "dietLabels": [
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Kosher"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "1 tbsp sunflower oil",
                      "500g beef mince",
                      "300ml beef stock"
                  ],
                  "ingredients": [
                      {
                          "text": "1 tbsp sunflower oil",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "sunflower oil",
                          "weight": 13.6,
                          "foodCategory": "Oils",
                          "foodId": "food_b09yz1nbx49rv1bss5kgxat77cvn",
                          "image": "https://www.edamam.com/food-img/be4/be4dba2bb618ecda2213ac422ae05289.jpg"
                      },
                      {
                          "text": "500g beef mince",
                          "quantity": 500,
                          "measure": "gram",
                          "food": "beef mince",
                          "weight": 500,
                          "foodCategory": "meats",
                          "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
                          "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
                      },
                      {
                          "text": "300ml beef stock",
                          "quantity": 300,
                          "measure": "milliliter",
                          "food": "beef stock",
                          "weight": 304.326204316587,
                          "foodCategory": "canned soup",
                          "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
                          "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
                      }
                  ],
                  "calories": 1429.7864065611561,
                  "totalCO2Emissions": 80065.37080541407,
                  "co2EmissionsClass": "G",
                  "totalWeight": 817.926204316587,
                  "totalTime": 30,
                  "cuisineType": [
                      "mexican"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 1429.7864065611561,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 113.87389358388492,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 39.7745141715108,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 5.8999999999999995,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 50.664060267856144,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 7.57061631021583,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.6519144517990436,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 3.6519144517990436,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 1.6433615033095696,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 91.99522622503676,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 355,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 932.5658845468422,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 114.34609634532696,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 106.30283430216109,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 1913.003477985686,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 10.521680751654785,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 21.417354547338196,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 884.3411233381421,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 20,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.3154276474244737,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 1.0319368459280942,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 23.80372450164064,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1.7823794123741228,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 41.08652408633174,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 41.08652408633174,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 10.700000000000001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0.5,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 6.470032620431659,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 10.038726204316587,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 601.348829939607,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 71.4893203280578,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 175.1906055136691,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 198.872570857554,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 1.2173048172663479,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 183.99045245007355,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 118.33333333333333,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 38.85691185611842,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 11.434609634532695,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 25.310198643371685,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 40.70220165926992,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 58.453781953637694,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 194.70322315761996,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 126.33444619116315,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 2.2222222222222223,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 26.28563728537281,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 79.37975737908417,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 148.773278135254,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 137.1061086441633,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 10.271631021582937,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 445.83333333333337,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 3.3333333333333335,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 43.13355080287772,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 8.365605170263823,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 113.87389358388492,
                          "hasRDI": true,
                          "daily": 175.1906055136691,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 39.7745141715108,
                                  "hasRDI": true,
                                  "daily": 198.872570857554,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 5.8999999999999995,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 50.664060267856144,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 7.57061631021583,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 3.6519144517990436,
                          "hasRDI": true,
                          "daily": 1.2173048172663479,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 3.6519144517990436,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 1.6433615033095696,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 91.99522622503676,
                          "hasRDI": true,
                          "daily": 183.99045245007355,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 355,
                          "hasRDI": true,
                          "daily": 118.33333333333333,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 932.5658845468422,
                          "hasRDI": true,
                          "daily": 38.85691185611842,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 114.34609634532696,
                          "hasRDI": true,
                          "daily": 11.434609634532695,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 106.30283430216109,
                          "hasRDI": true,
                          "daily": 25.310198643371685,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 1913.003477985686,
                          "hasRDI": true,
                          "daily": 40.70220165926992,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 10.521680751654785,
                          "hasRDI": true,
                          "daily": 58.453781953637694,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 21.417354547338196,
                          "hasRDI": true,
                          "daily": 194.70322315761996,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 884.3411233381421,
                          "hasRDI": true,
                          "daily": 126.33444619116315,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 20,
                          "hasRDI": true,
                          "daily": 2.2222222222222223,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.3154276474244737,
                          "hasRDI": true,
                          "daily": 26.28563728537281,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 1.0319368459280942,
                          "hasRDI": true,
                          "daily": 79.37975737908417,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 23.80372450164064,
                          "hasRDI": true,
                          "daily": 148.773278135254,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 1.7823794123741228,
                          "hasRDI": true,
                          "daily": 137.1061086441633,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 41.08652408633174,
                          "hasRDI": true,
                          "daily": 10.271631021582937,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 41.08652408633174,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 10.700000000000001,
                          "hasRDI": true,
                          "daily": 445.83333333333337,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0.5,
                          "hasRDI": true,
                          "daily": 3.3333333333333335,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 6.470032620431659,
                          "hasRDI": true,
                          "daily": 43.13355080287772,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 10.038726204316587,
                          "hasRDI": true,
                          "daily": 8.365605170263823,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 601.348829939607,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/b12051c8c93341e98fbd35a80aa10e33?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_333e271a3dc26d367d4f6c1776cd0b13",
                  "label": "Barbecued Beef Brisket",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08494a1093e34fdb7d1351c9217751cab22c5301e70322d2a4f3529fd1acf3a3",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0324a962ec9fc92f36989ddb931b818dc5d7d84f55c9898af21c094682561f2",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=519832a089fcebc7775a8f8ca18d183646021dec50c2174014a7d46286fd35ba",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=08494a1093e34fdb7d1351c9217751cab22c5301e70322d2a4f3529fd1acf3a3",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b64/b64005809d54d818e6ded326347b07c8-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cb3f448d71e6ea51ef0b333640e40565feab1f998a6c6ffbee86d9664909c2aa",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Saveur",
                  "url": "http://www.saveur.com/article/Recipes/Barbecued-Beef-Brisket",
                  "shareAs": "http://www.edamam.com/recipe/barbecued-beef-brisket-333e271a3dc26d367d4f6c1776cd0b13/beef",
                  "yield": 30,
                  "dietLabels": [
                      "Low-Carb",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "2 tbsp. chili powder",
                      "1 tbsp. cayenne",
                      "1 8-10-lb. beef brisket",
                      "1 cup apple juice"
                  ],
                  "ingredients": [
                      {
                          "text": "2 tbsp. chili powder",
                          "quantity": 2,
                          "measure": "tablespoon",
                          "food": "chili powder",
                          "weight": 16,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
                          "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
                      },
                      {
                          "text": "1 tbsp. cayenne",
                          "quantity": 1,
                          "measure": "tablespoon",
                          "food": "cayenne",
                          "weight": 5.3,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_a8iooz3aris8gba605l07brngnrx",
                          "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
                      },
                      {
                          "text": "1 8-10-lb. beef brisket",
                          "quantity": 9,
                          "measure": "pound",
                          "food": "beef brisket",
                          "weight": 4082.33133,
                          "foodCategory": "meats",
                          "foodId": "food_akcl1lrbxwowcrai1l6xkbtvxhsn",
                          "image": "https://www.edamam.com/food-img/e0d/e0dd59302a5bf4ff2d2e4797cdfe4160.jpg"
                      },
                      {
                          "text": "1 cup apple juice",
                          "quantity": 1,
                          "measure": "cup",
                          "food": "apple juice",
                          "weight": 248,
                          "foodCategory": "fruit",
                          "foodId": "food_ai7w4okaoeknd5b5j9o66bm6nu10",
                          "image": "https://www.edamam.com/food-img/324/32497d8cd6291a6f03acc032e1da7676.jpg"
                      }
                  ],
                  "calories": 11443.2884708,
                  "totalCO2Emissions": 406395.02870840003,
                  "co2EmissionsClass": "G",
                  "totalWeight": 4351.63133,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 11443.2884708,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 909.80485526,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 366.397827168,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 388.90393948300004,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 36.317629738499996,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 38.9758,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 31.4702,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 7.5056,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 25.5539,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 729.6989767400001,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 3837.3914502000002,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 2838.4621714,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 774.4803261000001,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 779.1156394,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 11732.127904300001,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 64.71396995,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 173.551655259,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 6775.912381200001,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 347.04,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 6.3932,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 2.9670959310000002,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 5.3033578492,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 164.97492693400002,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 18.716087731800002,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 377.5078197,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 377.5078197,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 56.336172354,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 25.254224719,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 90.61553261,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 2641.71312869,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 572.16442354,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 1399.6997773230767,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 1831.98913584,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 12.991933333333334,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 30.0224,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 1459.3979534800005,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1279.1304834,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 118.26925714166667,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 77.44803261000001,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 185.50372366666664,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 249.61974264468085,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 359.52205527777784,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 1577.7423205363636,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 967.9874830285715,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 38.56,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 7.103555555555556,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 247.25799425000002,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 407.9506037846154,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 1031.0932933375002,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1439.699056292308,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 94.376954925,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 2347.3405147500002,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 168.36149812666665,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 75.51294384166667,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 909.80485526,
                          "hasRDI": true,
                          "daily": 1399.6997773230767,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 366.397827168,
                                  "hasRDI": true,
                                  "daily": 1831.98913584,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 388.90393948300004,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 36.317629738499996,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 38.9758,
                          "hasRDI": true,
                          "daily": 12.991933333333334,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 31.4702,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 7.5056,
                                  "hasRDI": true,
                                  "daily": 30.0224,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 25.5539,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 729.6989767400001,
                          "hasRDI": true,
                          "daily": 1459.3979534800005,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 3837.3914502000002,
                          "hasRDI": true,
                          "daily": 1279.1304834,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 2838.4621714,
                          "hasRDI": true,
                          "daily": 118.26925714166667,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 774.4803261000001,
                          "hasRDI": true,
                          "daily": 77.44803261000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 779.1156394,
                          "hasRDI": true,
                          "daily": 185.50372366666664,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 11732.127904300001,
                          "hasRDI": true,
                          "daily": 249.61974264468085,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 64.71396995,
                          "hasRDI": true,
                          "daily": 359.52205527777784,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 173.551655259,
                          "hasRDI": true,
                          "daily": 1577.7423205363636,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 6775.912381200001,
                          "hasRDI": true,
                          "daily": 967.9874830285715,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 347.04,
                          "hasRDI": true,
                          "daily": 38.56,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 6.3932,
                          "hasRDI": true,
                          "daily": 7.103555555555556,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 2.9670959310000002,
                          "hasRDI": true,
                          "daily": 247.25799425000002,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 5.3033578492,
                          "hasRDI": true,
                          "daily": 407.9506037846154,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 164.97492693400002,
                          "hasRDI": true,
                          "daily": 1031.0932933375002,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 18.716087731800002,
                          "hasRDI": true,
                          "daily": 1439.699056292308,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 377.5078197,
                          "hasRDI": true,
                          "daily": 94.376954925,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 377.5078197,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 56.336172354,
                          "hasRDI": true,
                          "daily": 2347.3405147500002,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 25.254224719,
                          "hasRDI": true,
                          "daily": 168.36149812666665,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 90.61553261,
                          "hasRDI": true,
                          "daily": 75.51294384166667,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 2641.71312869,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/333e271a3dc26d367d4f6c1776cd0b13?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c1cb3d40562840b3945f9ad2152ed428",
                  "label": "Boiled beef & carrots with parsley dumplings",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c9c/c9c0a2c5e23a00fe06a477a669964fed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0813482363b4f918f04905c1f3d508620cc43834615104bdabe698ce7157ce60",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9c/c9c0a2c5e23a00fe06a477a669964fed-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e6463be477add9aea297059ff8dab6429a9da6bf0d8b5d2958290c36cdca6fb",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9c/c9c0a2c5e23a00fe06a477a669964fed-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e459bf55721bcf3007a8061a33aaedd606c475e1f192509fb4e118670c9012d8",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c9c/c9c0a2c5e23a00fe06a477a669964fed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0813482363b4f918f04905c1f3d508620cc43834615104bdabe698ce7157ce60",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "https://www.bbcgoodfood.com/recipes/boiled-beef-carrots-parsley-dumplings",
                  "shareAs": "http://www.edamam.com/recipe/boiled-beef-carrots-with-parsley-dumplings-c1cb3d40562840b3945f9ad2152ed428/beef",
                  "yield": 6,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Paleo",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "1-1.25kg joint silverside beef",
                      "2l good quality stock (chicken, beef or vegetable)"
                  ],
                  "ingredients": [
                      {
                          "text": "1-1.25kg joint silverside beef",
                          "quantity": 1.125,
                          "measure": "kilogram",
                          "food": "beef",
                          "weight": 1125,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "2l good quality stock (chicken, beef or vegetable)",
                          "quantity": 2,
                          "measure": "liter",
                          "food": "stock (chicken",
                          "weight": 2028.84136211058,
                          "foodCategory": "canned soup",
                          "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
                          "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
                      }
                  ],
                  "calories": 2192.8828903598087,
                  "totalCO2Emissions": 131939.66424403142,
                  "co2EmissionsClass": "G",
                  "totalWeight": 3153.84136211058,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 2192.8828903598087,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 78.45859634532695,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 28.900080772374963,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 2.8125,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 40.04535672748357,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 7.808932101295535,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 72.96810008250347,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 72.96810008250347,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 32.055693521347166,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 294.12680232518665,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 769.6152408633175,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 3789.9931478181297,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 207.1152408633174,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 317.4036544844232,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 6326.53343021611,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 27.773066860432216,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 63.70287790695482,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 2989.0371677698568,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 42.7884136211058,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 4.05768272422116,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 1.6100944767387033,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 3.637015157793993,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 87.06819352134715,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 7.627593230887452,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 135.19206810552902,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 135.19206810552902,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 25.5375,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 1.125,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 2.633652408633174,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 20.93268272422116,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 2683.966735865955,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 109.64414451799044,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 120.70553283896454,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 144.50040386187482,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 24.322700027501156,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 588.2536046503733,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 256.5384136211058,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 157.91638115908873,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 20.711524086331742,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 75.57229868676743,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 134.60709425991723,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 154.2948158912901,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 579.1170718814075,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 427.0053096814081,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 4.754268180122867,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 4.508536360245733,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 134.17453972822528,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 279.7703967533841,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 544.1762095084197,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 586.7379408374962,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 33.798017026382254,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1064.0625,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 7.5,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 17.55768272422116,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 17.4439022701843,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 78.45859634532695,
                          "hasRDI": true,
                          "daily": 120.70553283896454,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 28.900080772374963,
                                  "hasRDI": true,
                                  "daily": 144.50040386187482,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 2.8125,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 40.04535672748357,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 7.808932101295535,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 72.96810008250347,
                          "hasRDI": true,
                          "daily": 24.322700027501156,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 72.96810008250347,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0,
                                  "hasRDI": true,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 32.055693521347166,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 294.12680232518665,
                          "hasRDI": true,
                          "daily": 588.2536046503733,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 769.6152408633175,
                          "hasRDI": true,
                          "daily": 256.5384136211058,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 3789.9931478181297,
                          "hasRDI": true,
                          "daily": 157.91638115908873,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 207.1152408633174,
                          "hasRDI": true,
                          "daily": 20.711524086331742,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 317.4036544844232,
                          "hasRDI": true,
                          "daily": 75.57229868676743,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 6326.53343021611,
                          "hasRDI": true,
                          "daily": 134.60709425991723,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 27.773066860432216,
                          "hasRDI": true,
                          "daily": 154.2948158912901,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 63.70287790695482,
                          "hasRDI": true,
                          "daily": 579.1170718814075,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 2989.0371677698568,
                          "hasRDI": true,
                          "daily": 427.0053096814081,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 42.7884136211058,
                          "hasRDI": true,
                          "daily": 4.754268180122867,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 4.05768272422116,
                          "hasRDI": true,
                          "daily": 4.508536360245733,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 1.6100944767387033,
                          "hasRDI": true,
                          "daily": 134.17453972822528,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 3.637015157793993,
                          "hasRDI": true,
                          "daily": 279.7703967533841,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 87.06819352134715,
                          "hasRDI": true,
                          "daily": 544.1762095084197,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 7.627593230887452,
                          "hasRDI": true,
                          "daily": 586.7379408374962,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 135.19206810552902,
                          "hasRDI": true,
                          "daily": 33.798017026382254,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 135.19206810552902,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 25.5375,
                          "hasRDI": true,
                          "daily": 1064.0625,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 1.125,
                          "hasRDI": true,
                          "daily": 7.5,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 2.633652408633174,
                          "hasRDI": true,
                          "daily": 17.55768272422116,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 20.93268272422116,
                          "hasRDI": true,
                          "daily": 17.4439022701843,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 2683.966735865955,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/c1cb3d40562840b3945f9ad2152ed428?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_47291513d1f446aea44e42a2a4bb3a6d",
                  "label": "Beef Stock",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/943/94327fe768dcfeeeff667fdc23fb77fa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=98043a2d1e1fa47189cd1d20e4114cd059fbbbfea781f34405901b31792d0f2e",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/943/94327fe768dcfeeeff667fdc23fb77fa-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4c0546aa0343340a233a4b8ff8e17fd33fc5403c078e4817e80b55efd6a262e2",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/943/94327fe768dcfeeeff667fdc23fb77fa-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=30255d9b638b563391f035f40dfa88ad056a6793e9530ab438574ca3ef4fcec3",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/943/94327fe768dcfeeeff667fdc23fb77fa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=98043a2d1e1fa47189cd1d20e4114cd059fbbbfea781f34405901b31792d0f2e",
                          "width": 300,
                          "height": 300
                      },
                      "LARGE": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/943/94327fe768dcfeeeff667fdc23fb77fa-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8466746211fcc2b83beb7b39bd36ddf9c3fd95c25c062d473a2389d682072fdc",
                          "width": 600,
                          "height": 600
                      }
                  },
                  "source": "Saveur",
                  "url": "https://www.saveur.com/article/Recipes/Beef-Stock/",
                  "shareAs": "http://www.edamam.com/recipe/beef-stock-47291513d1f446aea44e42a2a4bb3a6d/beef",
                  "yield": 2,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Sugar-Conscious",
                      "Keto-Friendly",
                      "Paleo",
                      "DASH",
                      "Dairy-Free",
                      "Gluten-Free",
                      "Wheat-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Crustacean-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "No oil added",
                      "Sulfite-Free",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [],
                  "ingredientLines": [
                      "3 medium yellow onions, halved",
                      "12 lb. beef shin bone, cut into pieces",
                      "3 stalks celery, trimmed",
                      "2 medium carrots, peeled",
                      "3 leeks, trimmed",
                      "1 bunch fresh parsley",
                      "1 Bouquet Garni"
                  ],
                  "ingredients": [
                      {
                          "text": "3 medium yellow onions, halved",
                          "quantity": 3,
                          "measure": "<unit>",
                          "food": "yellow onions",
                          "weight": 330,
                          "foodCategory": "vegetables",
                          "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
                          "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
                      },
                      {
                          "text": "12 lb. beef shin bone, cut into pieces",
                          "quantity": 12,
                          "measure": "pound",
                          "food": "beef shin",
                          "weight": 5443.10844,
                          "foodCategory": "meats",
                          "foodId": "food_a5df8fkb08nkskaatgb0hagygc19",
                          "image": "https://www.edamam.com/food-img/769/7693944597853171e289e9e6760e26dc.jpg"
                      },
                      {
                          "text": "3 stalks celery, trimmed",
                          "quantity": 3,
                          "measure": "stalk",
                          "food": "celery",
                          "weight": 120,
                          "foodCategory": "vegetables",
                          "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
                          "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
                      },
                      {
                          "text": "2 medium carrots, peeled",
                          "quantity": 2,
                          "measure": "<unit>",
                          "food": "carrots",
                          "weight": 122,
                          "foodCategory": "vegetables",
                          "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                          "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                          "text": "3 leeks, trimmed",
                          "quantity": 3,
                          "measure": "<unit>",
                          "food": "leeks",
                          "weight": 267,
                          "foodCategory": "vegetables",
                          "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
                          "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
                      },
                      {
                          "text": "1 bunch fresh parsley",
                          "quantity": 1,
                          "measure": "bunch",
                          "food": "parsley",
                          "weight": 60,
                          "foodCategory": "vegetables",
                          "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                          "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                      },
                      {
                          "text": "1 Bouquet Garni",
                          "quantity": 1,
                          "measure": "<unit>",
                          "food": "Bouquet Garni",
                          "weight": 7.2,
                          "foodCategory": "Condiments and sauces",
                          "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
                          "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
                      }
                  ],
                  "calories": 294.813632128,
                  "totalCO2Emissions": 181731.27105200238,
                  "co2EmissionsClass": "G",
                  "totalWeight": 253.97233760000003,
                  "totalTime": 0,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "soup"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 294.813632128,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 8.487857397600001,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 2.8112955212800004,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 3.8446467417600005,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 0.3617321064000001,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 3.6954560000000005,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 2.8796160000000004,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 0.8158399999999999,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 1.2971568,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 47.94532639680001,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 84.91249166400002,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 148.539932688,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 65.16766752000001,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 37.73900726400001,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 924.8255065120003,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 5.83336463232,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 15.206755429440003,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 456.55452870400006,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 61.3196,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 6.0311200000000005,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 0.23797457760000004,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.4948290627200001,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 12.664406578240001,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1.07805918672,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 33.853467008,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 33.853467008,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 7.250220442080001,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 0.18560640000000006,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 51.407759999999996,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 190.579841648,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 14.740681606399999,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 13.058242150153847,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 14.056477606400003,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 1.2318186666666668,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 3.2633599999999996,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 95.89065279360003,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 28.304163888,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 6.189163862,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 6.516766752000001,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 8.985477920000003,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 19.677138436425537,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 32.40758129066667,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 138.24323117672728,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 65.22207552914286,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 6.813288888888889,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 6.701244444444446,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 19.831214800000005,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 38.06377405538462,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 79.152541114,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 82.92762974769231,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 8.463366752,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 302.0925184200001,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 1.2373760000000005,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 42.8398,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 8.487857397600001,
                          "hasRDI": true,
                          "daily": 13.058242150153847,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 2.8112955212800004,
                                  "hasRDI": true,
                                  "daily": 14.056477606400003,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 3.8446467417600005,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 0.3617321064000001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 3.6954560000000005,
                          "hasRDI": true,
                          "daily": 1.2318186666666668,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 2.8796160000000004,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 0.8158399999999999,
                                  "hasRDI": true,
                                  "daily": 3.2633599999999996,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 1.2971568,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 47.94532639680001,
                          "hasRDI": true,
                          "daily": 95.89065279360003,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 84.91249166400002,
                          "hasRDI": true,
                          "daily": 28.304163888,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 148.539932688,
                          "hasRDI": true,
                          "daily": 6.189163862,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 65.16766752000001,
                          "hasRDI": true,
                          "daily": 6.516766752000001,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 37.73900726400001,
                          "hasRDI": true,
                          "daily": 8.985477920000003,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 924.8255065120003,
                          "hasRDI": true,
                          "daily": 19.677138436425537,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 5.83336463232,
                          "hasRDI": true,
                          "daily": 32.40758129066667,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 15.206755429440003,
                          "hasRDI": true,
                          "daily": 138.24323117672728,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 456.55452870400006,
                          "hasRDI": true,
                          "daily": 65.22207552914286,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 61.3196,
                          "hasRDI": true,
                          "daily": 6.813288888888889,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 6.0311200000000005,
                          "hasRDI": true,
                          "daily": 6.701244444444446,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 0.23797457760000004,
                          "hasRDI": true,
                          "daily": 19.831214800000005,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 0.4948290627200001,
                          "hasRDI": true,
                          "daily": 38.06377405538462,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 12.664406578240001,
                          "hasRDI": true,
                          "daily": 79.152541114,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 1.07805918672,
                          "hasRDI": true,
                          "daily": 82.92762974769231,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 33.853467008,
                          "hasRDI": true,
                          "daily": 8.463366752,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 33.853467008,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 7.250220442080001,
                          "hasRDI": true,
                          "daily": 302.0925184200001,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 0.18560640000000006,
                          "hasRDI": true,
                          "daily": 1.2373760000000005,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 51.407759999999996,
                          "hasRDI": true,
                          "daily": 42.8398,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 190.579841648,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/47291513d1f446aea44e42a2a4bb3a6d?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_289850df03ac7636a36fdb371b3a2709",
                  "label": "Pappardelle with beef",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5bb/5bb1180e1b37bcb18d02488fde389f2b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0064db02087d9d9071aca54305e5453ad714def3bc71c72a4953659d1cf41fe3",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5bb/5bb1180e1b37bcb18d02488fde389f2b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=73c3dfad416de9e8f2a23c2534e1c44b19b2475fb96786e4b1444143e66fdffd",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5bb/5bb1180e1b37bcb18d02488fde389f2b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=52c7747df63a13241d37ce04120260693b9e8048af259914ed8a7c395e3f5555",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5bb/5bb1180e1b37bcb18d02488fde389f2b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0064db02087d9d9071aca54305e5453ad714def3bc71c72a4953659d1cf41fe3",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "http://www.bbcgoodfood.com/recipes/353608/pappardelle-with-beef",
                  "shareAs": "http://www.edamam.com/recipe/pappardelle-with-beef-289850df03ac7636a36fdb371b3a2709/beef",
                  "yield": 6,
                  "dietLabels": [
                      "Low-Fat",
                      "Low-Sodium"
                  ],
                  "healthLabels": [
                      "Pescatarian",
                      "Mediterranean",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Pork-Free",
                      "Red-Meat-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "No oil added",
                      "Kosher",
                      "Immuno-Supportive"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "½ quantity beef with red wine & carrots (see 'Goes well with')",
                      "400g can chopped tomato",
                      "500g pappardelle pasta",
                      "grated Parmesan, to serve"
                  ],
                  "ingredients": [
                      {
                          "text": "½ quantity beef with red wine & carrots (see 'Goes well with')",
                          "quantity": 0.5,
                          "measure": "<unit>",
                          "food": "carrots",
                          "weight": 30.5,
                          "foodCategory": "vegetables",
                          "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                          "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                      },
                      {
                          "text": "400g can chopped tomato",
                          "quantity": 400,
                          "measure": "gram",
                          "food": "tomato",
                          "weight": 400,
                          "foodCategory": "canned vegetables",
                          "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
                          "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
                      },
                      {
                          "text": "500g pappardelle pasta",
                          "quantity": 500,
                          "measure": "gram",
                          "food": "pasta",
                          "weight": 500,
                          "foodCategory": "grains",
                          "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
                          "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
                      },
                      {
                          "text": "grated Parmesan, to serve",
                          "quantity": 0,
                          "measure": null,
                          "food": "Parmesan",
                          "weight": 0,
                          "foodCategory": "Cheese",
                          "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
                          "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
                      }
                  ],
                  "calories": 1931.505,
                  "totalCO2Emissions": 1634.115,
                  "co2EmissionsClass": "C",
                  "totalWeight": 930.5,
                  "totalTime": 35,
                  "cuisineType": [
                      "mediterranean"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 1931.505,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 8.6232,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 1.5307600000000003,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 0,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 1.0186600000000001,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 3.25511,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 390.30189999999993,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 365.8479,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 24.454,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 24.9957,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 68.44365,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 0,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 511.04499999999996,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 247.065,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 308.65999999999997,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 1976.6,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 8.8715,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 7.603200000000001,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 1023.675,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 334.67499999999995,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 52.1995,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 2.77013,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 0.53769,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 11.647815,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1.1960899999999999,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 127.79500000000002,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 127.79500000000002,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 3.1113,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 14.926,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 455.63149999999996,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 96.57525,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 13.26646153846154,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 7.653800000000001,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 130.10063333333332,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 97.816,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 136.8873,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 21.293541666666663,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 24.7065,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 73.49047619047619,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 42.05531914893617,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 49.28611111111111,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 69.12000000000002,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 146.23928571428573,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 37.1861111111111,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 57.99944444444444,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 230.84416666666667,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 41.36076923076923,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 72.79884375,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 92.00692307692306,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 31.948750000000004,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 0,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 20.742,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 12.438333333333333,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 8.6232,
                          "hasRDI": true,
                          "daily": 13.26646153846154,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 1.5307600000000003,
                                  "hasRDI": true,
                                  "daily": 7.653800000000001,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 1.0186600000000001,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 3.25511,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 390.30189999999993,
                          "hasRDI": true,
                          "daily": 130.10063333333332,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 365.8479,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 24.454,
                                  "hasRDI": true,
                                  "daily": 97.816,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 24.9957,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 68.44365,
                          "hasRDI": true,
                          "daily": 136.8873,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 511.04499999999996,
                          "hasRDI": true,
                          "daily": 21.293541666666663,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 247.065,
                          "hasRDI": true,
                          "daily": 24.7065,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 308.65999999999997,
                          "hasRDI": true,
                          "daily": 73.49047619047619,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 1976.6,
                          "hasRDI": true,
                          "daily": 42.05531914893617,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 8.8715,
                          "hasRDI": true,
                          "daily": 49.28611111111111,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 7.603200000000001,
                          "hasRDI": true,
                          "daily": 69.12000000000002,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 1023.675,
                          "hasRDI": true,
                          "daily": 146.23928571428573,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 334.67499999999995,
                          "hasRDI": true,
                          "daily": 37.1861111111111,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 52.1995,
                          "hasRDI": true,
                          "daily": 57.99944444444444,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 2.77013,
                          "hasRDI": true,
                          "daily": 230.84416666666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 0.53769,
                          "hasRDI": true,
                          "daily": 41.36076923076923,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 11.647815,
                          "hasRDI": true,
                          "daily": 72.79884375,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 1.1960899999999999,
                          "hasRDI": true,
                          "daily": 92.00692307692306,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 127.79500000000002,
                          "hasRDI": true,
                          "daily": 31.948750000000004,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 127.79500000000002,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": true,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 3.1113,
                          "hasRDI": true,
                          "daily": 20.742,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 14.926,
                          "hasRDI": true,
                          "daily": 12.438333333333333,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 455.63149999999996,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/289850df03ac7636a36fdb371b3a2709?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          },
          {
              "recipe": {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_33ddfa8e5edeb498a2339d47824c01c7",
                  "label": "Beef stew with horseradish dumplings",
                  "image": "https://edamam-product-images.s3.amazonaws.com/web-img/dd1/dd1507230c8931df609198425cb7728e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5ccc11b867e6f816d825dffb9a401afd1dc4ec43161d67ba2b7daf0400af61f",
                  "images": {
                      "THUMBNAIL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd1/dd1507230c8931df609198425cb7728e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0df9ce717249e59b2c3a0c41ee3d2da53c201f1f6eacaadabd112f580b407d03",
                          "width": 100,
                          "height": 100
                      },
                      "SMALL": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd1/dd1507230c8931df609198425cb7728e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfad63690c4306274b7e3dc52c86ec70210303e3bc759b7f2a37d435e41be3e8",
                          "width": 200,
                          "height": 200
                      },
                      "REGULAR": {
                          "url": "https://edamam-product-images.s3.amazonaws.com/web-img/dd1/dd1507230c8931df609198425cb7728e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCcCSopJUeOiFOMW8XJhxwm1recwYI32mngW55BkVX6KQIhAJgypFdt2Rp79d3HCogmrd%2FFD%2B5b1J6cVuhC1EeFTMPVKsIFCNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxGG2Q9akTaH%2FeCdrsqlgXx2d1X2FyDGSAF4zoxGmCsW6u2AzShAoW4xvqxMZsrMGh09wKGC8gyiGVfye3USO385Dny7BrGERo463ecnA3Iok%2Fbs5wW98C6RLZa1hJIfxMRYu9rSlwoJRY1GtgNyeE7KFVdRGJj%2Boo0neGoOg%2BjmXY%2BiNUjJwm0L67W6ud5Q63Dfofju7d11wGJONldOdeQx9Oiya5yPY%2B0xHGviPak6o4Jv79XAjy1vEJwf64RKzFSNwm67mqguV%2F8b%2F5RaswNOd36m3766Zh8IK1AwLNiGpW0kiX40DFEvwoUYkrr6jyUwkZp6YkJw%2FN7hs7hVLgswwdDeUiUZ%2Fu85K%2BpAaNyiNds4lfMRK4PrshmQHdxDXMR2K1Z6zIeULF%2BSbB4c%2BObFsftA%2B2RR%2FY%2FpZVKXmd6jQg5G3hCp5VN43%2BC6na6ELBcOHDJRhoW5gGRIo1YsqA9RZC5waWQmCcqOjnttJAPDnW3D8YmMveV0fd99JJ6AURwsMy604rqBBHA6us1duE2Vg%2F%2FuLWSZD4rycb6CFGL7SRmsKSgYzFOw5VxQ1o2BCqecrmXPmnLoUoqjugaRUiPTjlWRGi95AKs%2BBtR2JnLq%2Fm%2Bu3FKHxBc3RjcMVgkAZpp0cyKriA5lren%2B2mw%2FL%2BhMHJn8zv5Cuataqx5clyaAQS3Mw1ikgvqY1fK8EjYRhRm0OXr28EYOR6h5PGPLVmqCsne1bU2QD%2FpIP0QQGRcdtrotH%2BAMfGDWmB1TaI9jCY8vZ8cQdzwBlg3j3ldWSizrWICwbcNw6bHTNHx2QixMDuOtC7JI6Na07756M8X%2B3x2KzyDfVbCLNRHdg4Rlsx37AbJM%2BYXa2e6X1db%2B1I%2FR%2FXaFt21nAA7UNixZREKFXPRNw4hSzC%2Fp7OxBjqwAWgAEddbAqoUJaHPOYmyP78Jo3Gi3buv7CuJ6o3yDLRAZk7l7S6E9%2FwnKdvGzRiSqKmkuLwVvzPABRoF13vujgmcz2NH5qHKxrkO9GPQnFHkupqhG2XOpK8TRO89gF0d0N6Y2x5BuA9jW0e75MpnyJBy3ELXCJghBBSV9AeHKFfXtSZtSoYY5JSzV3pkOUcndt8KkH0Pdobm1ynlo%2BBDgPNhdIviDQH917Rg%2F2qbDnEU&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240427T110741Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFIIMTYC54%2F20240427%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f5ccc11b867e6f816d825dffb9a401afd1dc4ec43161d67ba2b7daf0400af61f",
                          "width": 300,
                          "height": 300
                      }
                  },
                  "source": "BBC Good Food",
                  "url": "https://www.bbcgoodfood.com/recipes/beef-stew-horseradish-dumplings",
                  "shareAs": "http://www.edamam.com/recipe/beef-stew-with-horseradish-dumplings-33ddfa8e5edeb498a2339d47824c01c7/beef",
                  "yield": 8,
                  "dietLabels": [
                      "High-Protein",
                      "Low-Carb"
                  ],
                  "healthLabels": [
                      "Dairy-Free",
                      "Egg-Free",
                      "Peanut-Free",
                      "Tree-Nut-Free",
                      "Soy-Free",
                      "Fish-Free",
                      "Shellfish-Free",
                      "Crustacean-Free",
                      "Celery-Free",
                      "Mustard-Free",
                      "Sesame-Free",
                      "Lupine-Free",
                      "Mollusk-Free",
                      "Alcohol-Free",
                      "Sulfite-Free",
                      "Immuno-Supportive"
                  ],
                  "cautions": [
                      "Sulfites"
                  ],
                  "ingredientLines": [
                      "2kg beef shin, neck or stewing steak, chopped into large chunks",
                      "100g plain flour",
                      "25g dripping, lard or oil",
                      "500g shallots",
                      "1l beef stock"
                  ],
                  "ingredients": [
                      {
                          "text": "2kg beef shin, neck or stewing steak, chopped into large chunks",
                          "quantity": 2,
                          "measure": "kilogram",
                          "food": "stewing steak",
                          "weight": 2000,
                          "foodCategory": "meats",
                          "foodId": "food_bknby1la98smrsbwnthinbam42nj",
                          "image": "https://www.edamam.com/food-img/bab/bab88ab3ea40d34e4c8ae35d6b30344a.jpg"
                      },
                      {
                          "text": "100g plain flour",
                          "quantity": 100,
                          "measure": "gram",
                          "food": "flour",
                          "weight": 100,
                          "foodCategory": "grains",
                          "foodId": "food_ahebfs0a985an4aubqaebbipra58",
                          "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
                      },
                      {
                          "text": "25g dripping, lard or oil",
                          "quantity": 25,
                          "measure": "gram",
                          "food": "lard",
                          "weight": 25,
                          "foodCategory": "Oils",
                          "foodId": "food_bq8ww91a79r6zrbzro0naaor0fa3",
                          "image": "https://www.edamam.com/food-img/bc2/bc208be87a2eb48178d8a55ee5fd8e7d.jpg"
                      },
                      {
                          "text": "500g shallots",
                          "quantity": 500,
                          "measure": "gram",
                          "food": "shallots",
                          "weight": 500,
                          "foodCategory": "vegetables",
                          "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                          "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                      },
                      {
                          "text": "1l beef stock",
                          "quantity": 1,
                          "measure": "liter",
                          "food": "beef stock",
                          "weight": 1014.42068105529,
                          "foodCategory": "canned soup",
                          "foodId": "food_bxd832fblxgfaibgn0zk0b6dg6dh",
                          "image": "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg"
                      }
                  ],
                  "calories": 3681.3746885371875,
                  "totalCO2Emissions": 302768.5693513802,
                  "co2EmissionsClass": "G",
                  "totalWeight": 3639.42068105529,
                  "totalTime": 195,
                  "cuisineType": [
                      "american"
                  ],
                  "mealType": [
                      "lunch/dinner"
                  ],
                  "dishType": [
                      "main course"
                  ],
                  "totalNutrients": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 3681.3746885371875,
                          "unit": "kcal"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 123.59297861294975,
                          "unit": "g"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 50.19504723836935,
                          "unit": "g"
                      },
                      "FATRN": {
                          "label": "Trans",
                          "quantity": 5,
                          "unit": "g"
                      },
                      "FAMS": {
                          "label": "Monounsaturated",
                          "quantity": 62.068200892853774,
                          "unit": "g"
                      },
                      "FAPU": {
                          "label": "Polyunsaturated",
                          "quantity": 9.658721034052766,
                          "unit": "g"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 174.87304817266346,
                          "unit": "g"
                      },
                      "CHOCDF.net": {
                          "label": "Carbohydrates (net)",
                          "quantity": 156.17304817266347,
                          "unit": "g"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 18.7,
                          "unit": "g"
                      },
                      "SUGAR": {
                          "label": "Sugars",
                          "quantity": 45.09787167769857,
                          "unit": "g"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 474.78408741678925,
                          "unit": "g"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 1283.75,
                          "unit": "mg"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 3650.552948489474,
                          "unit": "mg"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 541.1536544844232,
                          "unit": "mg"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 618.0094476738703,
                          "unit": "mg"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 11113.678259952287,
                          "unit": "mg"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 51.708935838849285,
                          "unit": "mg"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 112.652015157794,
                          "unit": "mg"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 5062.47041112714,
                          "unit": "mg"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 40,
                          "unit": "µg"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 40,
                          "unit": "mg"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 2.3547588247482456,
                          "unit": "mg"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 4.463122819760314,
                          "unit": "mg"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 108.89574833880212,
                          "unit": "mg"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 13.686931374580409,
                          "unit": "mg"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 276.2884136211058,
                          "unit": "µg"
                      },
                      "FOLFD": {
                          "label": "Folate (food)",
                          "quantity": 276.2884136211058,
                          "unit": "µg"
                      },
                      "FOLAC": {
                          "label": "Folic acid",
                          "quantity": 0,
                          "unit": "µg"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 45.4,
                          "unit": "µg"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 2.625,
                          "unit": "µg"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 4.111442068105529,
                          "unit": "mg"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 35.31442068105529,
                          "unit": "µg"
                      },
                      "WATER": {
                          "label": "Water",
                          "quantity": 2829.729433132023,
                          "unit": "g"
                      }
                  },
                  "totalDaily": {
                      "ENERC_KCAL": {
                          "label": "Energy",
                          "quantity": 184.06873442685935,
                          "unit": "%"
                      },
                      "FAT": {
                          "label": "Fat",
                          "quantity": 190.1430440199227,
                          "unit": "%"
                      },
                      "FASAT": {
                          "label": "Saturated",
                          "quantity": 250.97523619184676,
                          "unit": "%"
                      },
                      "CHOCDF": {
                          "label": "Carbs",
                          "quantity": 58.291016057554494,
                          "unit": "%"
                      },
                      "FIBTG": {
                          "label": "Fiber",
                          "quantity": 74.8,
                          "unit": "%"
                      },
                      "PROCNT": {
                          "label": "Protein",
                          "quantity": 949.5681748335785,
                          "unit": "%"
                      },
                      "CHOLE": {
                          "label": "Cholesterol",
                          "quantity": 427.9166666666667,
                          "unit": "%"
                      },
                      "NA": {
                          "label": "Sodium",
                          "quantity": 152.1063728537281,
                          "unit": "%"
                      },
                      "CA": {
                          "label": "Calcium",
                          "quantity": 54.115365448442326,
                          "unit": "%"
                      },
                      "MG": {
                          "label": "Magnesium",
                          "quantity": 147.14510658901673,
                          "unit": "%"
                      },
                      "K": {
                          "label": "Potassium",
                          "quantity": 236.46123957345293,
                          "unit": "%"
                      },
                      "FE": {
                          "label": "Iron",
                          "quantity": 287.2718657713849,
                          "unit": "%"
                      },
                      "ZN": {
                          "label": "Zinc",
                          "quantity": 1024.109228707218,
                          "unit": "%"
                      },
                      "P": {
                          "label": "Phosphorus",
                          "quantity": 723.2100587324486,
                          "unit": "%"
                      },
                      "VITA_RAE": {
                          "label": "Vitamin A",
                          "quantity": 4.444444444444445,
                          "unit": "%"
                      },
                      "VITC": {
                          "label": "Vitamin C",
                          "quantity": 44.44444444444444,
                          "unit": "%"
                      },
                      "THIA": {
                          "label": "Thiamin (B1)",
                          "quantity": 196.22990206235383,
                          "unit": "%"
                      },
                      "RIBF": {
                          "label": "Riboflavin (B2)",
                          "quantity": 343.3171399815626,
                          "unit": "%"
                      },
                      "NIA": {
                          "label": "Niacin (B3)",
                          "quantity": 680.5984271175132,
                          "unit": "%"
                      },
                      "VITB6A": {
                          "label": "Vitamin B6",
                          "quantity": 1052.8408749677237,
                          "unit": "%"
                      },
                      "FOLDFE": {
                          "label": "Folate equivalent (total)",
                          "quantity": 69.07210340527645,
                          "unit": "%"
                      },
                      "VITB12": {
                          "label": "Vitamin B12",
                          "quantity": 1891.6666666666667,
                          "unit": "%"
                      },
                      "VITD": {
                          "label": "Vitamin D",
                          "quantity": 17.5,
                          "unit": "%"
                      },
                      "TOCPHA": {
                          "label": "Vitamin E",
                          "quantity": 27.40961378737019,
                          "unit": "%"
                      },
                      "VITK1": {
                          "label": "Vitamin K",
                          "quantity": 29.42868390087941,
                          "unit": "%"
                      }
                  },
                  "digest": [
                      {
                          "label": "Fat",
                          "tag": "FAT",
                          "schemaOrgTag": "fatContent",
                          "total": 123.59297861294975,
                          "hasRDI": true,
                          "daily": 190.1430440199227,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Saturated",
                                  "tag": "FASAT",
                                  "schemaOrgTag": "saturatedFatContent",
                                  "total": 50.19504723836935,
                                  "hasRDI": true,
                                  "daily": 250.97523619184676,
                                  "unit": "g"
                              },
                              {
                                  "label": "Trans",
                                  "tag": "FATRN",
                                  "schemaOrgTag": "transFatContent",
                                  "total": 5,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Monounsaturated",
                                  "tag": "FAMS",
                                  "schemaOrgTag": null,
                                  "total": 62.068200892853774,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Polyunsaturated",
                                  "tag": "FAPU",
                                  "schemaOrgTag": null,
                                  "total": 9.658721034052766,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Carbs",
                          "tag": "CHOCDF",
                          "schemaOrgTag": "carbohydrateContent",
                          "total": 174.87304817266346,
                          "hasRDI": true,
                          "daily": 58.291016057554494,
                          "unit": "g",
                          "sub": [
                              {
                                  "label": "Carbs (net)",
                                  "tag": "CHOCDF.net",
                                  "schemaOrgTag": null,
                                  "total": 156.17304817266347,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Fiber",
                                  "tag": "FIBTG",
                                  "schemaOrgTag": "fiberContent",
                                  "total": 18.7,
                                  "hasRDI": true,
                                  "daily": 74.8,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars",
                                  "tag": "SUGAR",
                                  "schemaOrgTag": "sugarContent",
                                  "total": 45.09787167769857,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              },
                              {
                                  "label": "Sugars, added",
                                  "tag": "SUGAR.added",
                                  "schemaOrgTag": null,
                                  "total": 0,
                                  "hasRDI": false,
                                  "daily": 0,
                                  "unit": "g"
                              }
                          ]
                      },
                      {
                          "label": "Protein",
                          "tag": "PROCNT",
                          "schemaOrgTag": "proteinContent",
                          "total": 474.78408741678925,
                          "hasRDI": true,
                          "daily": 949.5681748335785,
                          "unit": "g"
                      },
                      {
                          "label": "Cholesterol",
                          "tag": "CHOLE",
                          "schemaOrgTag": "cholesterolContent",
                          "total": 1283.75,
                          "hasRDI": true,
                          "daily": 427.9166666666667,
                          "unit": "mg"
                      },
                      {
                          "label": "Sodium",
                          "tag": "NA",
                          "schemaOrgTag": "sodiumContent",
                          "total": 3650.552948489474,
                          "hasRDI": true,
                          "daily": 152.1063728537281,
                          "unit": "mg"
                      },
                      {
                          "label": "Calcium",
                          "tag": "CA",
                          "schemaOrgTag": null,
                          "total": 541.1536544844232,
                          "hasRDI": true,
                          "daily": 54.115365448442326,
                          "unit": "mg"
                      },
                      {
                          "label": "Magnesium",
                          "tag": "MG",
                          "schemaOrgTag": null,
                          "total": 618.0094476738703,
                          "hasRDI": true,
                          "daily": 147.14510658901673,
                          "unit": "mg"
                      },
                      {
                          "label": "Potassium",
                          "tag": "K",
                          "schemaOrgTag": null,
                          "total": 11113.678259952287,
                          "hasRDI": true,
                          "daily": 236.46123957345293,
                          "unit": "mg"
                      },
                      {
                          "label": "Iron",
                          "tag": "FE",
                          "schemaOrgTag": null,
                          "total": 51.708935838849285,
                          "hasRDI": true,
                          "daily": 287.2718657713849,
                          "unit": "mg"
                      },
                      {
                          "label": "Zinc",
                          "tag": "ZN",
                          "schemaOrgTag": null,
                          "total": 112.652015157794,
                          "hasRDI": true,
                          "daily": 1024.109228707218,
                          "unit": "mg"
                      },
                      {
                          "label": "Phosphorus",
                          "tag": "P",
                          "schemaOrgTag": null,
                          "total": 5062.47041112714,
                          "hasRDI": true,
                          "daily": 723.2100587324486,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin A",
                          "tag": "VITA_RAE",
                          "schemaOrgTag": null,
                          "total": 40,
                          "hasRDI": true,
                          "daily": 4.444444444444445,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin C",
                          "tag": "VITC",
                          "schemaOrgTag": null,
                          "total": 40,
                          "hasRDI": true,
                          "daily": 44.44444444444444,
                          "unit": "mg"
                      },
                      {
                          "label": "Thiamin (B1)",
                          "tag": "THIA",
                          "schemaOrgTag": null,
                          "total": 2.3547588247482456,
                          "hasRDI": true,
                          "daily": 196.22990206235383,
                          "unit": "mg"
                      },
                      {
                          "label": "Riboflavin (B2)",
                          "tag": "RIBF",
                          "schemaOrgTag": null,
                          "total": 4.463122819760314,
                          "hasRDI": true,
                          "daily": 343.3171399815626,
                          "unit": "mg"
                      },
                      {
                          "label": "Niacin (B3)",
                          "tag": "NIA",
                          "schemaOrgTag": null,
                          "total": 108.89574833880212,
                          "hasRDI": true,
                          "daily": 680.5984271175132,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin B6",
                          "tag": "VITB6A",
                          "schemaOrgTag": null,
                          "total": 13.686931374580409,
                          "hasRDI": true,
                          "daily": 1052.8408749677237,
                          "unit": "mg"
                      },
                      {
                          "label": "Folate equivalent (total)",
                          "tag": "FOLDFE",
                          "schemaOrgTag": null,
                          "total": 276.2884136211058,
                          "hasRDI": true,
                          "daily": 69.07210340527645,
                          "unit": "µg"
                      },
                      {
                          "label": "Folate (food)",
                          "tag": "FOLFD",
                          "schemaOrgTag": null,
                          "total": 276.2884136211058,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Folic acid",
                          "tag": "FOLAC",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin B12",
                          "tag": "VITB12",
                          "schemaOrgTag": null,
                          "total": 45.4,
                          "hasRDI": true,
                          "daily": 1891.6666666666667,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin D",
                          "tag": "VITD",
                          "schemaOrgTag": null,
                          "total": 2.625,
                          "hasRDI": true,
                          "daily": 17.5,
                          "unit": "µg"
                      },
                      {
                          "label": "Vitamin E",
                          "tag": "TOCPHA",
                          "schemaOrgTag": null,
                          "total": 4.111442068105529,
                          "hasRDI": true,
                          "daily": 27.40961378737019,
                          "unit": "mg"
                      },
                      {
                          "label": "Vitamin K",
                          "tag": "VITK1",
                          "schemaOrgTag": null,
                          "total": 35.31442068105529,
                          "hasRDI": true,
                          "daily": 29.42868390087941,
                          "unit": "µg"
                      },
                      {
                          "label": "Sugar alcohols",
                          "tag": "Sugar.alcohol",
                          "schemaOrgTag": null,
                          "total": 0,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      },
                      {
                          "label": "Water",
                          "tag": "WATER",
                          "schemaOrgTag": null,
                          "total": 2829.729433132023,
                          "hasRDI": false,
                          "daily": 0,
                          "unit": "g"
                      }
                  ]
              },
              "_links": {
                  "self": {
                      "href": "https://api.edamam.com/api/recipes/v2/33ddfa8e5edeb498a2339d47824c01c7?type=public&app_id=dfec72b2&app_key=f75d3a748df11d9c9594fd9c2f7a2951",
                      "title": "Self"
                  }
              }
          }
      ]
  },
  "status": 200,
  "statusText": "",
  "headers": {
      "cache-control": "private",
      "content-language": "en",
      "content-type": "application/json",
      "expires": "Thu, 01 Jan 1970 00:00:00 GMT"
  },
  "config": {
      "transitional": {
          "silentJSONParsing": true,
          "forcedJSONParsing": true,
          "clarifyTimeoutError": false
      },
      "adapter": [
          "xhr",
          "http"
      ],
      "transformRequest": [
          null
      ],
      "transformResponse": [
          null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "env": {},
      "headers": {
          "Accept": "application/json, text/plain, */*"
      },
      "params": {
          "type": "public",
          "q": "beef",
          "app_id": "dfec72b2",
          "app_key": "f75d3a748df11d9c9594fd9c2f7a2951"
      },
      "method": "get",
      "url": "https://api.edamam.com/api/recipes/v2"
  },
  "request": {}
}
 
const map = test.data.hits.map((val) => {
  return val.recipe
})

export default function Home() {
  const [ingredient, setIngredient] = useState('')
  const [recipeList, setRecipeList]  = useState(map)

  const apiUrl = 'https://api.edamam.com/api/recipes/v2'
  const appId = process.env.REACT_APP_ID
  const appKey = process.env.REACT_APP_KEY

 


  useEffect(() => {
    return () => {
      
    }
  }, [])

  const getRecipeList = () => {
    // axios.get(apiUrl, {
    //   params: {
    //     type: 'public',
    //     q: ingredient,
    //     app_id: appId,
    //     app_key: appKey
    //   }
    // })
    // .then((res) => {
    //   console.log('response', res)
    // })
    // .catch((err) => {
    //   console.log('error', err)
    // })
  }
  
  return (
    <main className="min-h-screen sm:container mx-auto p-24 flex flex-col items-center">
      <h1 className="font-bold mb-4">Recipe Finder</h1>
      <div>
        <input
          type="text"
          id="ingredient"
          placeholder="Input Ingredients..."
          className="p-2 mr-5"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          required
        />

        <button
          type="button"
          className="text-white bg-blue-700 p-2"
          onClick={() => getRecipeList()}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          {/* Search */}
        </button>
      </div>

      <div
        className="recipe-card grid grid-cols-3 gap-10 mt-3"
      >
        {
          recipeList.map((val, index) => (
            <div>
              <img src={val.image} alt="recipe-image" />
            </div>
          ))
        // <div
        //   className="border-2"
        // >
        //   {index}
        // </div>
        }
      </div>
    </main>
  );
}
