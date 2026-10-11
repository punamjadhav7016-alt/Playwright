# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myTest.spec.js >> test
- Location: tests\myTest.spec.js:3:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\playwrightNEW\JavaScript Interview Questions and Answers (1).pdf'
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: Software
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [active] [ref=f3e1]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
              - img [ref=f3e8]
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "See Photo Become 3D" [ref=f3e17] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
                - link "From idea to 3D model in 30 seconds. See AI build it live — free to try." [ref=f3e21] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
              - generic [ref=f3e24]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
                - link "Meshy.AI" [ref=f3e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
                - link "Open" [ref=f3e28] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CBORJTjtVatDqLcvHmsMP6OCY4AaxsPHvhwGAruusnhaO4vK1ig4QASCVlJmjAWDl6uaDvA6gAYjL2Z4pyAEJqQK3S8cf9cuDPqgDAcgDywSqBPgBT9A0cYCGVlDJZIrmeLroY24h2Yw1Oo04JNSNu01D-l-WMmvYW_P06t57FbonN3GV3jzt3uzdr--hVI3wOzPGI1JzUcDJ1T0B-8D7tu_3n1rHrx2VC_2L12Gm9Rm3GvjYMxqBcHnz_5y9bqZWfm9akA-5IXblwnBNwH2Cd6tBVrmOfbONB8J419nVMcHU8GVssfc6ehGvY_yaA2E_FOLT2VxvK0wOz17KXNaqv-rgExCmuBCUHdjaDeeH_Y6mCKsYWznIPkjSEPE-4Poq_9NB7xVaSm3byMZUpcyX-wFCDmMb1ICpHxo9Y804rFH8hIn5x45UX1sfaT3ABMjenPDgBYgF2b3Qk1mgBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljtqdnBsNCVA2ABsQn6wXcQfSB0jYAKAZgLAcgLAYAMAaoNAklOyA0B6g0TCIvO2cGw0JUDFcujZgIdaDAGbPANAogOCbAOuILbhBnYEwzQFQHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAASKMEQRIKNDk3MDIxMjIyMRgBshgJEgLoWBguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE&num=1&cid=CAQShwIAEQoqgUor9Esrfp3kuoXTFGNxbKf74S7frgL0zbTKjxT-K-EToAV3SvENCAs_aosIW5t7FekhR-3x3bGyHQvzslbCQM1vh5FyNU7oTgnUsVQvkZE5IDmP6zLANsh9dYrIQ2v9b7UPpzKnjZTy4zP3c6caci1keSAhQ2GrTj0aFVBZ_DOmhtBzDzRVqn2807NaU-wv5WXfGvMRZMN3dFtowG21VKXDRXPDk2CqwbGjljcUZXtRqU_8gc4B118s5z65oiT9MywEEJG3ajC0akxQN0PS7ESgDlKKSPNidSUPIO1u5sl07PEVRi0FV3qXNSJgwdjnz6rCXwgGESktBAR4Nqu0yQNymBgB&sig=AOD64_0CBJ2FzMU1HcedextqT4hW8Sc28Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://www.meshy.ai%3Futm_content%3D6720766264%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D23922196692%26gad_source%3D5%26gad_campaignid%3D23931920089%26gclid%3DEAIaIQobChMI0MnZwbDQlQMVy6NmAh1oMAZsEAEYASAAEgJS5_D_BwE
                  - generic [ref=f3e31]:
                    - img [ref=f3e32]
                    - img [ref=f3e34]
          - img [ref=f3e42] [cursor=pointer]
          - button [ref=f3e44] [cursor=pointer]:
            - img [ref=f3e45]
          - iframe
    - paragraph [ref=e37]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e38] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e39]:
      - insertion [ref=e41]:
        - generic [ref=e44]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e46]: Discover more
          - link "File transfer solutions" [ref=e47] [cursor=pointer]:
            - generic "File transfer solutions" [ref=e48]
            - img [ref=e50]
          - link "Small file upload" [ref=e52] [cursor=pointer]:
            - generic "Small file upload" [ref=e53]
            - img [ref=e55]
          - link "IT & Technical Jobs" [ref=e57] [cursor=pointer]:
            - generic "IT & Technical Jobs" [ref=e58]
            - img [ref=e60]
          - link "File upload practice" [ref=e62] [cursor=pointer]:
            - generic "File upload practice" [ref=e63]
            - img [ref=e65]
          - link "Programming" [ref=e67] [cursor=pointer]:
            - generic "Programming" [ref=e68]
            - img [ref=e70]
          - link "File Sharing & Hosting" [ref=e72] [cursor=pointer]:
            - generic "File Sharing & Hosting" [ref=e73]
            - img [ref=e75]
          - link "Software" [ref=e77] [cursor=pointer]:
            - generic "Software" [ref=e78]
            - img [ref=e80]
          - link "File uploader component" [ref=e82] [cursor=pointer]:
            - generic "File uploader component" [ref=e83]
            - img [ref=e85]
      - generic [ref=e89]:
        - navigation "breadcrumb mb-2" [ref=e90]:
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Home" [ref=e93] [cursor=pointer]:
                - /url: /
            - listitem [ref=e94]: / File Uploader
        - heading "File Uploader page for Automation Testing Practice" [level=1] [ref=e95]
        - paragraph [ref=e96]: Only a file less than 500KB will be accepted.
        - generic [ref=e98]:
          - paragraph [ref=e99]:
            - text: A file upload feature that can be used by QA, SDET, and developers to practice uploading test automation scenarios
            - link "Small file upload" [ref=e100] [cursor=pointer]:
              - img [ref=e102]
              - text: Small file upload
          - paragraph [ref=e104]: Choose a file on your system and then click upload. Or, drag and drop a file into the area below.
          - generic [ref=e105]:
            - button "Choose File" [ref=e107] [cursor=pointer]
            - button "Upload" [ref=e108] [cursor=pointer]
      - insertion [ref=e110]:
        - generic [ref=e113]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e115]: Discover more
          - link "Selenium automation framework" [ref=e116] [cursor=pointer]:
            - generic "Selenium automation framework" [ref=e117]
            - img [ref=e119]
          - link "Secure upload service" [ref=e121] [cursor=pointer]:
            - generic "Secure upload service" [ref=e122]
            - img [ref=e124]
          - link "Development Tools" [ref=e126] [cursor=pointer]:
            - generic "Development Tools" [ref=e127]
            - img [ref=e129]
          - link "Test automation tools" [ref=e131] [cursor=pointer]:
            - generic "Test automation tools" [ref=e132]
            - img [ref=e134]
          - link "Playwright automation scripts" [ref=e136] [cursor=pointer]:
            - generic "Playwright automation scripts" [ref=e137]
            - img [ref=e139]
          - link "Selenium WebDriver training" [ref=e141] [cursor=pointer]:
            - generic "Selenium WebDriver training" [ref=e142]
            - img [ref=e144]
          - link "QA developer tools" [ref=e146] [cursor=pointer]:
            - generic "QA developer tools" [ref=e147]
            - img [ref=e149]
          - link "UI automation practice" [ref=e151] [cursor=pointer]:
            - generic "UI automation practice" [ref=e152]
            - img [ref=e154]
  - generic [ref=e156]:
    - insertion:
      - iframe [ref=e158]:
        
  - contentinfo [ref=e159]:
    - generic [ref=e164]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e165]
      - paragraph [ref=e166]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e167] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e169] [cursor=pointer]
  - insertion [ref=e171]:
    - iframe [ref=e174]:
      - generic [ref=f12e5]:
        - generic [ref=f12e7]:
          - generic [ref=f12e11]:
            - button "Play video" [ref=f12e15] [cursor=pointer]:
              - img [ref=f12e16]
            - button "Unmute video" [ref=f12e21] [cursor=pointer]
          - button "Replay" [ref=f12e28]:
            - img [ref=f12e30] [cursor=pointer]
          - img [ref=f12e35]
        - button "Learn more" [ref=f12e42] [cursor=pointer]
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('test', async ({ page }) => {
  4 |   await page.goto('https://practice.expandtesting.com/upload');
> 5 |   await page.getByTestId('file-input').setInputFiles('JavaScript Interview Questions and Answers (1).pdf');
    |   ^ Error: ENOENT: no such file or directory, stat 'C:\playwrightNEW\JavaScript Interview Questions and Answers (1).pdf'
  6 |   await page.getByText('Do you enjoy this platform? ❤️ Buy us a coffee Discover moreSoftware testing').click();
  7 |   await page.getByTestId('file-submit').click();
  8 |   screenshort({path:'tests/screenshort/homepge.png'})
  9 | });
```